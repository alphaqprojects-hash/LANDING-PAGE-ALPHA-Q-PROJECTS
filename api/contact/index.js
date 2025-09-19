const nodemailer = require('nodemailer');

// Rate limiting storage (in production, use Redis or database)
const requestCounts = new Map();

// Simple rate limiting
const checkRateLimit = (ip) => {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;
  
  const key = `${ip}-${Math.floor(now / windowMs)}`;
  const count = requestCounts.get(key) || 0;
  
  if (count >= maxRequests) {
    return false;
  }
  
  requestCounts.set(key, count + 1);
  
  // Clean old entries
  for (const [k, v] of requestCounts.entries()) {
    if (parseInt(k.split('-')[1]) < Math.floor((now - windowMs) / windowMs)) {
      requestCounts.delete(k);
    }
  }
  
  return true;
};

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Email templates
const createEmailHTML = (formData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Quote Request - AlphaQ Projects</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 20px; }
        .field-label { font-weight: bold; color: #374151; margin-bottom: 5px; }
        .field-value { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #2563eb; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; }
        .priority { background: #fef3c7; border-color: #f59e0b; padding: 15px; border-radius: 6px; margin-bottom: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🏠 New Quote Request</h1>
          <p>AlphaQ Projects - Contact Form Submission</p>
        </div>
        
        <div class="content">
          <div class="priority">
            <strong>⏰ New lead received!</strong> Please respond within 2 hours as promised on the website.
          </div>
          
          <div class="field">
            <div class="field-label">👤 Full Name:</div>
            <div class="field-value">${formData.name}</div>
          </div>
          
          <div class="field">
            <div class="field-label">📧 Email Address:</div>
            <div class="field-value"><a href="mailto:${formData.email}">${formData.email}</a></div>
          </div>
          
          <div class="field">
            <div class="field-label">📱 Phone Number:</div>
            <div class="field-value"><a href="tel:${formData.phone}">${formData.phone}</a></div>
          </div>
          
          <div class="field">
            <div class="field-label">🔨 Service Required:</div>
            <div class="field-value">${formData.service}</div>
          </div>
          
          <div class="field">
            <div class="field-label">💬 Project Details:</div>
            <div class="field-value">${formData.message || 'No additional details provided.'}</div>
          </div>
          
          <div class="footer">
            <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-AU', { 
              timeZone: 'Australia/Melbourne',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              timeZoneName: 'short'
            })}</p>
            <p>AlphaQ Projects - Melbourne Home Renovation Specialists</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    // Rate limiting
    const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.ip;
    if (!checkRateLimit(clientIP)) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please try again later.'
      });
    }

    const { name, email, phone, service, message } = req.body;
    
    // Basic validation
    if (!name || !email || !phone || !service) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, phone, and service are required.'
      });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }
    
    const formData = { name, email, phone, service, message };
    const transporter = createTransporter();
    
    // Email to business owner
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'alphaqprojects@gmail.com',
      to: process.env.EMAIL_TO || 'alphaqprojects@gmail.com',
      subject: `🏠 New Quote Request from ${name} - ${service}`,
      html: createEmailHTML(formData),
      text: `
New Quote Request from AlphaQ Projects Website

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${message || 'No additional details provided.'}

Submitted: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })}
      `
    };
    
    // Auto-reply to customer
    const autoReplyOptions = {
      from: process.env.EMAIL_FROM || 'alphaqprojects@gmail.com',
      to: email,
      subject: '✅ Quote Request Received - AlphaQ Projects',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Quote Request Received</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
            .highlight { background: #dbeafe; padding: 15px; border-radius: 6px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏠 AlphaQ Projects</h1>
              <p>Thank you for your quote request!</p>
            </div>
            
            <div class="content">
              <p>Hi ${name},</p>
              
              <p>Thank you for requesting a quote for <strong>${service}</strong>. We've received your inquiry and our team will review it shortly.</p>
              
              <div class="highlight">
                <strong>⏰ What happens next?</strong><br>
                • We'll review your project details within 2 hours<br>
                • Our team will prepare a detailed quote<br>
                • You'll receive a comprehensive response within 24 hours<br>
                • We may call you at ${phone} if we need clarification
              </div>
              
              <p><strong>Need immediate assistance?</strong><br>
              Call us directly at <a href="tel:0469349411">(04) 6934 9411</a></p>
              
              <p>We're excited to help transform your space!</p>
              
              <p>Best regards,<br>
              The AlphaQ Projects Team<br>
              Melbourne Home Renovation Specialists</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Hi ${name},

Thank you for requesting a quote for ${service}. We've received your inquiry and our team will review it shortly.

What happens next?
• We'll review your project details within 2 hours
• Our team will prepare a detailed quote  
• You'll receive a comprehensive response within 24 hours
• We may call you at ${phone} if we need clarification

Need immediate assistance?
Call us directly at (04) 6934 9411

We're excited to help transform your space!

Best regards,
The AlphaQ Projects Team
Melbourne Home Renovation Specialists
      `
    };
    
    // Send emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);
    
    console.log('✓ Emails sent successfully for:', name, email);
    
    res.status(200).json({
      success: true,
      message: 'Quote request submitted successfully! You should receive a confirmation email shortly.'
    });
    
  } catch (error) {
    console.error('✗ Email sending error:', error);
    
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error sending your request. Please try calling us directly at (04) 6934 9411.'
    });
  }
};
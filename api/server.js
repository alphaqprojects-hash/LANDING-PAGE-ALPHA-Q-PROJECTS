const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());

// Rate limiting - prevent spam
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    process.env.FRONTEND_URL,
    /\.vercel\.app$/
  ],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Apply rate limiting to contact endpoint
app.use('/api/contact', limiter);

// Nodemailer transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Gmail App Password
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Verify email configuration
const verifyEmailConfig = async () => {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('⚠️ Email credentials not configured. Email functionality will not work.');
      console.log('   Please set EMAIL_USER and EMAIL_PASS in your .env file.');
      return false;
    }
    
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✓ Email configuration verified successfully');
    return true;
  } catch (error) {
    console.error('✗ Email configuration error:', error.message);
    return false;
  }
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

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
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
    
    // Check if email configuration is available
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('⚠️ Email request received but credentials not configured:', { name, email, service });
      return res.status(500).json({
        success: false,
        message: 'Email service not configured. Please call us directly at (04) 6934 9411.'
      });
    }
    
    const formData = { name, email, phone, service, message };
    const transporter = createTransporter();
    
    // Email to business owner
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
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
      from: process.env.EMAIL_FROM,
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
• We'll review your project details within few hours
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
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'AlphaQ Projects API'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Endpoint not found' 
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ 
    success: false, 
    message: 'Internal server error' 
  });
});

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 AlphaQ Projects API server running on port ${PORT}`);
  console.log(`📧 Email service: ${process.env.EMAIL_USER}`);
  
  // Verify email configuration on startup
  await verifyEmailConfig();
});

module.exports = app;
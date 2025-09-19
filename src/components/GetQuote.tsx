import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export function GetQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null as 'success' | 'error' | null,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing again
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // API endpoint - update this URL when you deploy to production
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? '/api/contact' // This will be handled by Vercel serverless functions
        : 'http://localhost:3001/api/contact';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Quote request submitted successfully! Check your email for confirmation.'
        });
        // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to submit quote request');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error 
          ? error.message 
          : 'Failed to submit request. Please try calling us directly at (04) 6934 9411.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCall = () => {
    window.location.href = 'tel:0469349411';
  };

  return (
    <section id="quote" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          {/* Left Column - Content - Mobile Optimized */}
          <div className="text-white order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6">
              Get Your Free
              <span className="text-white"> Quote</span> Today
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              Ready to transform your space? Our expert team provides detailed quotes within 24 hours. 
              No hidden fees, no surprises.
            </p>

            {/* Contact Info Cards - Mobile Optimized */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-white text-sm sm:text-base">Call for Immediate Quote</div>
                  <div className="text-blue-100 text-base sm:text-lg font-medium">(04) 6934 9411</div>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-white text-sm sm:text-base">Email Response</div>
                  <div className="text-blue-100 text-base sm:text-lg font-medium">Within 2 Hours</div>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-white text-sm sm:text-base">Service Area</div>
                  <div className="text-blue-100 text-base sm:text-lg font-medium">Melbourne Wide</div>
                </div>
              </div>
            </div>

            {/* Trust Indicators - Mobile Optimized */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl text-white mb-1">1000+</div>
                <div className="text-xs sm:text-sm text-blue-200">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl text-white mb-1">4.9★</div>
                <div className="text-xs sm:text-sm text-blue-200">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl text-white mb-1">24hr</div>
                <div className="text-xs sm:text-sm text-blue-200">Response</div>
              </div>
            </div>
          </div>

          {/* Right Column - Form - Mobile Optimized */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl sm:text-2xl text-gray-900 mb-2">
                Request Your Quote
              </h3>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email and Phone Row - Stacked on Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="04XX XXX XXX"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="Bathroom Renovation">Complete Bathroom Renovation</option>
                    <option value="Floor Tiling">Floor & Wall Tiling</option>
                    <option value="Waterproofing">Waterproofing Services</option>
                    <option value="Screeding">Floor Screeding</option>
                    <option value="Multiple Services">Multiple Services</option>
                    <option value="Other">Other (Please specify in message)</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project, timeline, budget range, or any specific requirements..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-xl mb-4 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-800' 
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}>
                    <div className="flex items-center gap-2">
                      {submitStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <div className="w-5 h-5 text-red-600">⚠️</div>
                      )}
                      <p className="text-sm font-medium">{submitStatus.message}</p>
                    </div>
                  </div>
                )}

                {/* Submit Buttons - Mobile Optimized */}
                <div className="space-y-3 sm:space-y-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3.5 sm:py-4 rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl group text-sm sm:text-base ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Request...
                      </span>
                    ) : (
                      <>
                        Send Quote Request
                        <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  <div className="text-center">
                    <span className="text-gray-500 text-xs sm:text-sm">Or call directly for immediate service</span>
                  </div>
                  
                  <button
                    type="button"
                    onClick={handleCall}
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3.5 sm:py-4 rounded-xl transition-all duration-200 font-medium group text-sm sm:text-base"
                  >
                    <Phone className="w-4 h-4 mr-2 inline" />
                    Call (04) 6934 9411 Now
                  </button>
                </div>
              </form>

              {/* Trust Badges - Mobile Optimized */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" />
                  <span className="text-xs sm:text-sm text-gray-600">Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" />
                  <span className="text-xs sm:text-sm text-gray-600">Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" />
                  <span className="text-xs sm:text-sm text-gray-600">5-Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Phone, Mail, MapPin, Clock, Star, Shield, Award } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Bathroom Renovation",
    "Residential Tiling", 
    "Waterproofing",
    "Floor Screeding",
    "Wet Area Installation",
    "Custom Tile Design"
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About Us", href: "#about" },
    { name: "Get Quote", href: "#quote" },
    { name: "Reviews", href: "#reviews" }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl mb-4 text-blue-400">AlphaQ Projects</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Melbourne's premier specialists in bathroom renovations, residential tiling, waterproofing, 
              and screeding services. Delivering excellence since 2021.
            </p>
            
            {/* Certifications */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">5-Year Warranty</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">4.9★ Google Rating</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg mb-6 text-blue-400">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <div className="text-white">(04) 6934 9411</div>
                  <div className="text-gray-400 text-sm">Available 7 days a week</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <div className="text-white">info@alphaqprojects.com.au</div>
                  <div className="text-gray-400 text-sm">Quick response guaranteed</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <div className="text-white">Melbourne Wide Service</div>
                  <div className="text-gray-400 text-sm">VIC 3337, Australia</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <div className="text-white">Mon - Fri: 7:00 AM - 6:00 PM</div>
                  <div className="text-white">Sat - Sun: 8:00 AM - 4:00 PM</div>
                  <div className="text-gray-400 text-sm">Emergency callouts available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-6 text-blue-400">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Emergency Contact */}
            <div className="mt-8 p-4 bg-red-600 rounded-lg">
              <h5 className="text-white mb-2">Emergency Repairs?</h5>
              <p className="text-red-100 text-sm mb-3">Available 24/7 for urgent waterproofing issues</p>
              <a 
                href="tel:0469349411"
                className="bg-white text-red-600 px-4 py-2 rounded-lg text-sm hover:bg-red-50 transition-colors duration-300 inline-block"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Business Information Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="text-blue-400 mb-2">Business Information</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <div><strong>Company:</strong> ALPHAQ PROJECTS PTY LTD</div>
                <div><strong>ABN:</strong> Active from 04 May 2021</div>
                <div><strong>Entity Type:</strong> Australian Private Company</div>
                <div><strong>GST:</strong> Registered from 04 May 2021</div>
              </div>
            </div>
            <div>
              <h5 className="text-blue-400 mb-2">Service Areas</h5>
              <div className="text-sm text-gray-300">
                <p>We proudly serve all Melbourne suburbs including:</p>
                <p className="mt-1">Brighton, South Yarra, Hawthorn, Richmond, Kew, Toorak, Camberwell, Glen Waverley, Box Hill, and surrounding areas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} AlphaQ Projects Pty Ltd. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Warranty Terms
              </a>
            </div>
          </div>
          
          {/* Call to Action Button */}
          <div className="mt-6 text-center">
            <a 
              href="#quote"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Get Your Free Quote Today
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
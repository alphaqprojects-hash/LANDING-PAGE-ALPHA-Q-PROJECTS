import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Menu, X, Phone } from "lucide-react";
import alphaQlogo from 'figma:asset/250738c6c23f7539bd3f135648fc4cb34b910ae6.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    let targetElement;
    
    if (sectionId === 'contact') {
      targetElement = document.getElementById('quote');
    } else {
      targetElement = document.getElementById(sectionId);
    }

    if (targetElement) {
      // Simple and reliable scroll method
      targetElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    } else {
      // Debug: log if element not found
      console.warn(`Section with id "${sectionId === 'contact' ? 'quote' : sectionId}" not found`);
    }
  };

  const handleCall = () => {
    window.location.href = 'tel:0469349411';
  };



  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'About Us', id: 'about' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact Us', id: 'contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-gray-100' 
          : 'bg-white/95 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Section */}
            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src={alphaQlogo} 
                  alt="AlphaQ Projects" 
                  className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="text-lg text-gray-900">
                  AlphaQ <span className="text-blue-600">Projects</span>
                </div>
                <div className="text-xs text-gray-500 leading-tight">
                  Melbourne Renovation Expert
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <nav className="flex items-center space-x-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="relative px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-all duration-200 group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gray-50 rounded-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200" />
                  </button>
                ))}
              </nav>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                onClick={handleCall}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2.5 h-10 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 h-10 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl">
            <div className="flex flex-col h-full">
              
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10">
                    <img 
                      src={alphaQlogo} 
                      alt="AlphaQ Projects" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-base text-gray-900">
                      AlphaQ <span className="text-blue-600">Projects</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Melbourne Renovation Expert
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 px-6 py-8">
                <nav className="space-y-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-4 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-600 mb-2">Ready to get started?</div>
                  <div className="text-lg text-gray-900">0469349411</div>
                </div>
                
                <div className="space-y-3">
                  <Button
                    onClick={handleCall}
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-3 h-12 rounded-lg shadow-sm"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 h-12 rounded-lg shadow-sm"
                  >
                    Get a Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
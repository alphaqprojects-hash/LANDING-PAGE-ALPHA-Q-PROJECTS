import { useEffect, useRef, useState } from 'react';
import { ServiceBand } from "./ServiceBand";

export function ScrollStackBandedServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const services = [

    {
      id: "bathroom-renovation",
      bandColor: "#4f46e5",
      eyebrow: "Luxury Bathrooms",
      title: "Bathroom Renovation",
      body: "Create your perfect bathroom oasis with modern fixtures, custom layouts, and premium waterproof installations. We specialize in turning ordinary bathrooms into luxury spa-like retreats with attention to every detail.",
      bullets: [
        "Custom Layout Design",
        "Premium Fixture Installation",
        "Advanced Waterproofing Systems", 
        "Heated Floor Installation"
      ],
      cta: { 
        label: "View Bathroom Projects →", 
        href: "#projects" 
      },
      visual: {
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1651442897558-47cff0f64bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMHJlbm92YXRpb24lMjBtb2Rlcm58ZW58MXx8fHwxNzU3MjYwMzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Luxury modern bathroom renovation with premium fixtures",
        aspect: "4/3" as const
      },
      flip: true
    },
    {
      id: "tiling-services",
      bandColor: "#059669",
      eyebrow: "Expert Craftsmanship", 
      title: "Residential Tiling",
      body: "Expert residential tiling for kitchens, bathrooms, laundries, and living areas. Our master craftsmen work with premium ceramic, porcelain and natural stone to deliver flawless installations with precise pattern alignment.",
      bullets: [
        "Precision Pattern Alignment",
        "Premium Ceramic & Natural Stone",
        "Advanced Adhesive Systems",
        "Lifetime Installation Warranty"
      ],
      cta: { 
        label: "See Tiling Portfolio →", 
        href: "#projects" 
      },
      visual: {
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1637543564153-5c92a09e61b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0aWxpbmclMjBpbnN0YWxsYXRpb24lMjBjZXJhbWljfGVufDF8fHx8MTc1NzI4Nzg3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Professional ceramic tiling installation in progress",
        aspect: "4/3" as const
      },
      flip: false
    },
    {
      id: "waterproofing",
      bandColor: "#0891b2",
      eyebrow: "Ultimate Protection",
      title: "Residential Waterproofing", 
      body: "Comprehensive residential waterproofing for bathrooms, laundries, basements, and wet areas. Using the latest membrane technology and advanced application techniques to protect your home with long-lasting, guaranteed results.",
      bullets: [
        "Advanced Membrane Technology",
        "Leak Detection & Prevention",
        "Preventive Maintenance Programs",
        "10-Year Protection Guarantee"
      ],
      cta: { 
        label: "Protect Your Home →", 
        href: "#contact" 
      },
      visual: {
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcnByb29maW5nJTIwbWVtYnJhbmUlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzU3Mjg3ODcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Professional waterproofing membrane installation",
        aspect: "4/3" as const
      },
      flip: true
    },
    {
      id: "screeding",
      bandColor: "#7c3aed",
      eyebrow: "Perfect Foundation",
      title: "Professional Screeding",
      body: "Professional floor screeding for perfectly smooth, level surfaces. Using precision laser leveling and quick-drying compounds, we create the ideal foundation for any flooring installation with guaranteed results.",
      bullets: [
        "Laser Precision Leveling",
        "Self-Leveling Compound Systems",
        "Fast-Track Drying Technology",
        "Quality Surface Preparation"
      ],
      cta: { 
        label: "Get Screeding Quote →", 
        href: "#contact" 
      },
      visual: {
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1633677095081-492aad9530d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vciUyMHNjcmVlZGluZyUyMGNvbmNyZXRlJTIwcHJlcGFyYXRpb258ZW58MXx8fHwxNzU3Mjg2OTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Professional floor screeding and concrete preparation",
        aspect: "4/3" as const
      },
      flip: false
    }
  ];

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile scroll detection for current card
  useEffect(() => {
    if (!isMobile) return;

    const handleMobileScroll = () => {
      const cards = cardsRef.current;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      cards.forEach((card, index) => {
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        
        // If card center is in viewport, it's the current card
        if (cardCenter >= 0 && cardCenter <= windowHeight) {
          setCurrentCard(index);
        }
      });
    };

    let rafId: number;
    const scrollHandler = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleMobileScroll);
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    return () => {
      window.removeEventListener('scroll', scrollHandler);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  // Desktop scroll stack animation
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only animate when container is in view
      if (rect.bottom < 0 || rect.top > windowHeight) return;

      // Calculate total scroll progress through container
      const totalHeight = container.offsetHeight;
      const scrolled = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / (totalHeight + windowHeight)));

      // Animate each card
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Each card gets 1/5 of the total progress
        const cardStart = index / services.length;
        const cardEnd = (index + 1) / services.length;
        const cardProgress = Math.max(0, Math.min(1, (progress - cardStart) / (1 / services.length)));

        let transform = '';
        let opacity = 1;
        let zIndex = 10;

        if (progress < cardStart) {
          // Before card appears
          transform = 'translate3d(0, 100vh, 0) scale(0.95)';
          opacity = 0;
          zIndex = index + 10;
        } else if (cardProgress <= 0.15) {
          // Card entering
          const ease = cardProgress / 0.15;
          const smoothEase = ease * ease * (3 - 2 * ease); // Smooth step
          transform = `translate3d(0, ${(1 - smoothEase) * 100}vh, 0) scale(${0.95 + smoothEase * 0.05})`;
          opacity = smoothEase;
          zIndex = 30 + index;
          setCurrentCard(index);
        } else if (cardProgress <= 0.85) {
          // Card active/sticky
          transform = 'translate3d(0, 0, 0) scale(1)';
          opacity = 1;
          zIndex = 30 + index;
          setCurrentCard(index);
        } else {
          // Card exiting - stack behind
          const exitEase = (cardProgress - 0.85) / 0.15;
          const stackOffset = Math.min(30, exitEase * 30);
          const scaleReduction = exitEase * 0.05;
          transform = `translate3d(0, -${stackOffset}px, 0) scale(${1 - scaleReduction})`;
          opacity = 1 - exitEase * 0.3;
          zIndex = 20 + index;
        }

        // Apply styles with smooth transitions
        Object.assign(card.style, {
          transform,
          opacity: opacity.toString(),
          zIndex: zIndex.toString(),
          transition: 'none',
          willChange: 'transform, opacity'
        });
      });
    };

    // Optimized scroll handler
    let rafId: number;
    const scrollHandler = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isMobile, services.length]);

  return (
    <>
      {/* Section Header */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Expert Services
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Complete Renovation
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From full home transformations to specialized installations, we deliver exceptional 
            craftsmanship across all renovation disciplines with 10+ years of proven expertise.
          </p>
        </div>
      </section>

      {/* Desktop: Scroll Stack */}
      {!isMobile && (
        <div 
          ref={containerRef}
          className="relative"
          style={{ height: `${services.length * 100}vh` }}
        >
          <div className="sticky top-0 h-screen overflow-hidden">
            {services.map((service, index) => (
              <div
                key={`desktop-${index}`}
                ref={(el) => (cardsRef.current[index] = el)}
                className="absolute inset-0 w-screen h-screen"
                style={{
                  transform: 'translate3d(0, 100vh, 0) scale(0.95)',
                  opacity: 0,
                  zIndex: 10,
                  willChange: 'transform, opacity'
                }}
              >
                <ServiceBand
                  id={service.id}
                  bandColor={service.bandColor}
                  eyebrow={service.eyebrow}
                  title={service.title}
                  body={service.body}
                  bullets={service.bullets}
                  cta={service.cta}
                  visual={service.visual}
                  flip={service.flip}
                  className="h-full flex items-center"
                />
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
            <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-6">
              <div className="flex flex-col space-y-4">
                {services.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      index === currentCard 
                        ? 'bg-white scale-125 shadow-lg' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile: Touch-Optimized Cards */}
      {isMobile && (
        <div className="lg:hidden bg-gray-50">
          {services.map((service, index) => (
            <div
              key={`mobile-${index}`}
              ref={(el) => (cardsRef.current[index] = el)}
              className="min-h-screen py-8 px-4"
            >
              <div className="h-full max-w-sm mx-auto">
                <div 
                  className="relative h-full rounded-3xl overflow-hidden shadow-2xl"
                  style={{ backgroundColor: service.bandColor }}
                >
                  {/* Mobile Header */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0">
                      {service.visual.type === "image" ? (
                        <img
                          src={service.visual.src}
                          alt={service.visual.alt ?? ""}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video
                          className="w-full h-full object-cover"
                          poster={service.visual.poster}
                          controls
                          preload="metadata"
                          muted
                        >
                          <source src={service.visual.src} />
                        </video>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Service Number Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                        <span className="text-white text-sm font-medium">
                          Service {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Eyebrow and Title Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      {service.eyebrow && (
                        <p className="text-white/90 text-sm font-medium tracking-wide uppercase mb-2">
                          {service.eyebrow}
                        </p>
                      )}
                      <h3 className="text-white text-2xl font-semibold leading-tight mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Mobile Content */}
                  <div className="p-6 space-y-6">
                    {/* Description */}
                    <p className="text-white/95 text-base leading-relaxed">
                      {service.body}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <div 
                          key={bulletIndex}
                          className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20"
                        >
                          <div className="w-2 h-2 rounded-full bg-white/80 mt-2 flex-shrink-0" />
                          <span className="text-white/90 text-sm leading-relaxed">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3 pt-4">
                      <a
                        href={service.cta.href}
                        target={service.cta.external ? "_blank" : undefined}
                        rel={service.cta.external ? "noreferrer" : undefined}
                        className="w-full inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-6 py-4 rounded-xl shadow-lg font-medium transition-all duration-300 hover:shadow-xl active:scale-95"
                      >
                        {service.cta.label}
                      </a>
                      
                      <a
                        href="tel:+61-XXX-XXX-XXX"
                        className="w-full inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-6 py-4 rounded-xl backdrop-blur-sm font-medium transition-all duration-300 hover:bg-white/10 active:scale-95"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Mobile Navigation */}
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <div>
              <button
                onClick={() => {
                  const element = document.querySelector('#quote');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
                Ready to Transform Your Space?
              </h3>
              
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join 1000+ satisfied customers who chose AlphaQ Projects for their renovation needs. 
                Get your free consultation and detailed quote today.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium"
                >
                  Get Free Consultation
                  <span className="text-lg">→</span>
                </a>
                
                <a 
                  href="#projects"
                  className="inline-flex items-center justify-center gap-3 border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500 px-10 py-4 rounded-full transition-all duration-300 font-medium"
                >
                  View Our Portfolio
                </a>
              </div>

              {/* Trust Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-white mb-2">1000+</div>
                  <div className="text-gray-400">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-white mb-2">10+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-white mb-2">98%</div>
                  <div className="text-gray-400">On-Time Completion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

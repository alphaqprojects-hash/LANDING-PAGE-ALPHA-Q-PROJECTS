import { useEffect, useRef, useState } from 'react';
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Home, Droplets, Grid3x3, Shield, Layers, CheckCircle, Star, Clock, Award, Phone, ChevronLeft, ChevronRight } from "lucide-react";

export function ScrollStackServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    {
      icon: Home,
      title: "Complete Home Renovation",
      subtitle: "End-to-End Transformation",
      description: "Transform your entire home with our comprehensive renovation service. From initial design consultation to final walkthrough, we handle every detail with expert craftsmanship.",
      image: "https://images.unsplash.com/photo-1632214533040-eb166a3b172d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW50ZXJpb3IlMjByZW5vdmF0aW9uJTIwd29ya3hlbnwxfHx8fDE3NTcyNTQ0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Architectural Design", "Premium Materials", "Project Management", "5-Year Warranty"],
      stats: { projects: "150+", timeline: "8-16 weeks", satisfaction: "98%" },
      color: "from-blue-600 via-blue-700 to-blue-800",
      number: "01"
    },
    {
      icon: Droplets,
      title: "Luxury Bathroom Renovation",
      subtitle: "Spa-Like Sanctuary Creation",
      description: "Create your perfect bathroom oasis with modern fixtures, custom layouts, and premium waterproof installations for the ultimate spa-like experience.",
      image: "https://images.unsplash.com/photo-1677553512940-f79af72efd1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc1NzI1NDQ0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Custom Layouts", "Premium Fixtures", "Waterproofing", "Heated Floors"],
      stats: { projects: "200+", timeline: "2-4 weeks", satisfaction: "99%" },
      color: "from-indigo-600 via-indigo-700 to-purple-800",
      number: "02"
    },
    {
      icon: Grid3x3,
      title: "Expert Floor & Wall Tiling",
      subtitle: "Precision Pattern Installation",
      description: "Expert tiling services for all spaces. Our master craftsmen deliver flawless installations with intricate patterns and perfect alignment.",
      image: "https://images.unsplash.com/photo-1604589977707-d161da2edb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdGlsZSUyMGZsb29yJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc1NzI1NDQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Precision Alignment", "Premium Materials", "Pattern Design", "Lifetime Warranty"],
      stats: { projects: "300+", timeline: "1-3 weeks", satisfaction: "97%" },
      color: "from-cyan-600 via-teal-700 to-emerald-800",
      number: "03"
    },
    {
      icon: Shield,
      title: "Advanced Waterproofing",
      subtitle: "Ultimate Protection Systems",
      description: "Comprehensive waterproofing using advanced membrane technology. Protect your investment with our industry-leading systems.",
      image: "https://images.unsplash.com/photo-1635899669228-dbb4fba49ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHdhdGVycHJvb2ZpbmclMjBtZW1icmFuZXxlbnwxfHx8fDE3NTcyNTQ0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Membrane Systems", "Leak Detection", "Maintenance Plans", "10-Year Guarantee"],
      stats: { projects: "250+", timeline: "3-7 days", satisfaction: "100%" },
      color: "from-teal-600 via-blue-700 to-indigo-800",
      number: "04"
    },
    {
      icon: Layers,
      title: "Professional Screeding",
      subtitle: "Perfect Level Foundation",
      description: "Professional floor screeding for perfectly smooth surfaces using precision laser leveling and quick-drying compounds.",
      image: "https://images.unsplash.com/photo-1698395480871-dbd2f1ead093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZsb29yJTIwbGV2ZWxpbmclMjBzY3JlZWR8ZW58MXx8fHwxNzU3MjU0NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Laser Leveling", "Self-Leveling", "Fast Drying", "Surface Prep"],
      stats: { projects: "180+", timeline: "2-5 days", satisfaction: "96%" },
      color: "from-slate-600 via-gray-700 to-zinc-800",
      number: "05"
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
        let opacity = 0;
        let zIndex = 10;

        if (progress < cardStart) {
          // Before card appears
          transform = 'translate3d(0, 100vh, 0) scale(0.8)';
          opacity = 0;
          zIndex = index + 10;
        } else if (cardProgress <= 0.2) {
          // Card entering
          const ease = cardProgress / 0.2;
          const smoothEase = ease * ease * (3 - 2 * ease); // Smooth step
          transform = `translate3d(0, ${(1 - smoothEase) * 100}vh, 0) scale(${0.8 + smoothEase * 0.2})`;
          opacity = smoothEase;
          zIndex = 30 + index;
          setCurrentCard(index);
        } else if (cardProgress <= 0.8) {
          // Card active/sticky
          transform = 'translate3d(0, 0, 0) scale(1)';
          opacity = 1;
          zIndex = 30 + index;
          setCurrentCard(index);
        } else {
          // Card exiting
          const exitEase = (cardProgress - 0.8) / 0.2;
          const stackOffset = Math.min(50, exitEase * 50);
          transform = `translate3d(0, -${stackOffset}vh, 0) scale(${1 - exitEase * 0.1})`;
          opacity = 1 - exitEase * 0.5;
          zIndex = 20 + index;
        }

        // Apply styles
        Object.assign(card.style, {
          transform,
          opacity: opacity.toString(),
          zIndex: zIndex.toString(),
          transition: 'none'
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

  // Mobile scroll navigation
  const scrollToCard = (index: number) => {
    const card = cardsRef.current[index];
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Section Header */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Expert Services
          </Badge>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
            Complete
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Renovation Expertise
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From full home transformations to specialized installations, we deliver exceptional 
            craftsmanship across all renovation disciplines with 10+ years of proven expertise.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mt-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-gray-700 text-sm lg:text-base">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-gray-700 text-sm lg:text-base">On-Time Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-orange-600" />
              </div>
              <span className="text-gray-700 text-sm lg:text-base">5-Year Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop: Full Viewport Scroll Stack */}
      {!isMobile && (
        <div 
          ref={containerRef}
          className="relative"
          style={{ height: `${services.length * 100}vh` }}
        >
          <div className="sticky top-0 h-screen overflow-hidden">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <div
                  key={`desktop-${index}`}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="absolute inset-0 w-screen h-screen"
                  style={{
                    transform: 'translate3d(0, 100vh, 0) scale(0.8)',
                    opacity: 0,
                    zIndex: 10,
                  }}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${service.color} relative overflow-hidden`}>
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full grid lg:grid-cols-2 gap-16 items-center px-8 lg:px-16 xl:px-24 pt-24 pb-16">
                      {/* Left Content */}
                      <div className="flex flex-col justify-center">
                        <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-2xl px-6 py-3 mb-8 w-fit border border-white/20">
                          <IconComponent className="w-6 h-6 text-white" />
                          <span className="text-white/90 text-sm">Service {service.number}</span>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                        
                        <h3 className="text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-tight">
                          {service.title}
                        </h3>
                        
                        <p className="text-blue-100 text-lg mb-6">
                          {service.subtitle}
                        </p>
                        
                        <p className="text-white/90 text-xl lg:text-2xl mb-10 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-10">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                              <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                              <span className="text-white text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-10">
                          <div className="text-center">
                            <div className="text-2xl lg:text-3xl text-white mb-1">{service.stats.projects}</div>
                            <div className="text-white/70 text-sm">Projects</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl lg:text-3xl text-white mb-1">{service.stats.timeline}</div>
                            <div className="text-white/70 text-sm">Timeline</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl lg:text-3xl text-white mb-1">{service.stats.satisfaction}</div>
                            <div className="text-white/70 text-sm">Satisfaction</div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl shadow-lg transition-all group/btn">
                            Get Free Quote
                            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                          <Button size="lg" variant="outline" className="border-white/30 text-[rgba(0,0,0,1)] hover:bg-white/10 px-8 py-4 rounded-xl backdrop-blur-sm transition-all">
                            <Phone className="w-5 h-5 mr-2" />
                            Call Now
                          </Button>
                        </div>
                      </div>

                      {/* Right Visual */}
                      <div className="hidden lg:flex items-center justify-center">
                        <div className="relative w-full max-w-lg">
                          <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                            <ImageWithFallback
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                            <IconComponent className="w-12 h-12 text-gray-700" />
                          </div>
                          
                          <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                            <div className="flex items-center gap-3">
                              <Star className="w-6 h-6 text-yellow-500" />
                              <div>
                                <div className="text-gray-900 text-lg">4.9/5</div>
                                <div className="text-gray-600 text-sm">Rating</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-8 right-8 text-9xl text-white/[0.03] pointer-events-none select-none">
                      {service.number}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Indicator */}
          <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
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

      {/* Mobile: Card Stack */}
      {isMobile && (
        <div className="lg:hidden">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={`mobile-${index}`}
                ref={(el) => (cardsRef.current[index] = el)}
                className="min-h-screen bg-gray-50 py-8"
              >
                <div className="px-4">
                  <div className={`bg-gradient-to-br ${service.color} rounded-3xl overflow-hidden shadow-2xl`}>
                    {/* Mobile Header Image */}
                    <div className="relative h-64">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/20">
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-5 h-5 text-white" />
                          <span className="text-white text-sm">0{service.number}</span>
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl text-white mb-2 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-blue-100 text-sm">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Mobile Content */}
                    <div className="p-6">
                      <p className="text-white/90 text-base mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-1 gap-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                            <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
                            <span className="text-white text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3">
                          <div className="text-lg text-white mb-1">{service.stats.projects}</div>
                          <div className="text-white/70 text-xs">Projects</div>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3">
                          <div className="text-lg text-white mb-1">{service.stats.timeline}</div>
                          <div className="text-white/70 text-xs">Timeline</div>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3">
                          <div className="text-lg text-white mb-1">{service.stats.satisfaction}</div>
                          <div className="text-white/70 text-xs">Rating</div>
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="space-y-3">
                        <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 py-3 rounded-xl shadow-lg transition-all group">
                          Get Free Quote
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 py-3 rounded-xl backdrop-blur-sm transition-all">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Mobile Navigation */}
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl px-6 py-4 shadow-xl border border-gray-200/20">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => scrollToCard(Math.max(0, currentCard - 1))}
                  disabled={currentCard === 0}
                  className="w-10 h-10 rounded-full bg-blue-600 text-white disabled:bg-gray-300 disabled:text-gray-500 flex items-center justify-center transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex space-x-2">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToCard(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentCard 
                          ? 'bg-blue-600 scale-150' 
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => scrollToCard(Math.min(services.length - 1, currentCard + 1))}
                  disabled={currentCard === services.length - 1}
                  className="w-10 h-10 rounded-full bg-blue-600 text-white disabled:bg-gray-300 disabled:text-gray-500 flex items-center justify-center transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-8 lg:p-16 text-center text-white overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl mb-6">
                Ready to Transform Your Space?
              </h3>
              
              <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Join 1000+ satisfied customers who chose AlphaQ Projects. Get your free consultation today.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl shadow-lg transition-all group">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-600 text-[rgba(0,0,0,1)] hover:bg-gray-800 hover:text-white px-10 py-4 rounded-xl transition-all">
                  View Portfolio
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl text-white mb-2">1000+</div>
                  <div className="text-gray-400 text-sm lg:text-base">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl text-white mb-2">10+</div>
                  <div className="text-gray-400 text-sm lg:text-base">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl text-white mb-2">98%</div>
                  <div className="text-gray-400 text-sm lg:text-base">On-Time Completion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

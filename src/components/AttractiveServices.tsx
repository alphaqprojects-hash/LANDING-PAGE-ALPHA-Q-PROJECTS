import { Button } from "./ui/button";
import { ArrowRight, Phone, CheckCircle, Sparkles, Award, Clock, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AttractiveServices() {
  const handleGetQuote = () => {
    const element = document.querySelector('#quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn('Quote section not found');
    }
  };

  const handleCall = () => {
    window.location.href = 'tel:0469349411';
  };

  const services = [
    {
      icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Bathroom Renovation",
      subtitle: "Complete Transformations",
      description: "Turn your outdated bathroom into a luxurious retreat. From contemporary designs to timeless classics, we create spaces that perfectly blend functionality with stunning aesthetics.",
      mobileDescription: "Complete bathroom transformations with premium fixtures, custom design, and 5-year warranty.",
      features: ["Custom design consultation", "Premium fixtures & fittings", "Project management included", "5-year workmanship warranty"],
      image: "https://res.cloudinary.com/ddmjt70x0/image/upload/v1757857477/bathroom_renovation_1_a0lrwl.png",
      alt: "Modern luxury bathroom renovation",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Floor & Wall Tiling",
      subtitle: "Precision Craftsmanship",
      description: "Expert tile installation that transforms any space. Our precision craftsmanship ensures perfect alignment, clean lines, and lasting beauty that stands the test of time.",
      mobileDescription: "Expert tile installation with premium materials, pattern design, and grout sealing protection.",
      features: ["Premium tile selection", "Pattern design service", "Floor & wall installation", "Grout sealing & protection"],
      image: "https://res.cloudinary.com/ddmjt70x0/image/upload/v1757858021/tiling_oxbz0i.png",
      alt: "Professional tile installation and flooring",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Waterproofing",
      subtitle: "Ultimate Protection",
      description: "Protect your investment with professional waterproofing systems. Using premium membranes and proven techniques to ensure your bathroom stays dry and damage-free for years.",
      mobileDescription: "Professional waterproofing with premium membranes, compliance certification, and protection guarantee.",
      features: ["Premium membrane systems", "Australian standards compliance", "Wet area certification", "Long-term protection guarantee"],
      image: "https://images.unsplash.com/photo-1749532125405-70950966b0e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcnByb29maW5nJTIwYmF0aHJvb20lMjBtZW1icmFuZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTczNDQ3NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Professional waterproofing membrane installation",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50"
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Screeding",
      subtitle: "Perfect Foundation",
      description: "Create the perfect foundation for your flooring with our expert screeding services. Self-leveling compounds ensure smooth, level surfaces ready for any finish.",
      mobileDescription: "Expert screeding with self-leveling compounds, moisture barriers, and fast-curing formulas.",
      features: ["Self-leveling compounds", "Moisture barrier protection", "Fast curing formulas", "Ready for immediate installation"],
      image: "https://res.cloudinary.com/ddmjt70x0/image/upload/v1757858578/depositphotos_132150018-stock-photo-worker-screeding-cement-floor-with_gihqtm.webp",
      alt: "Professional floor screeding and concrete preparation",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 xl:mb-28">
          <div className="inline-flex items-center gap-2 bg-white shadow-sm border border-gray-200 text-gray-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
            <span className="text-sm font-medium">Our Expertise</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-gray-900 mb-4 sm:mb-6">
            Specialized
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Services</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Four core specialties, countless satisfied customers. Each service delivered with 
            professional expertise, premium materials, and meticulous attention to detail.
          </p>
        </div>

        {/* Services Grid - Mobile Optimized */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {services.map((service, index) => (
            <div key={service.title} className="group">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                
                {/* Image Section - Mobile Optimized */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-48 sm:h-56 lg:h-64 xl:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  

                  
                  {/* Service Icon Badge - Mobile Optimized */}
                  <div className={`absolute top-4 sm:top-6 left-4 sm:left-6 ${service.bgColor} backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg border border-white/20`}>
                    <div className={`text-white bg-gradient-to-r ${service.color} rounded-lg sm:rounded-xl p-1.5 sm:p-2`}>
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content Section - Mobile Optimized */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="space-y-4 sm:space-y-6">
                    
                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl text-gray-900 mb-1 sm:mb-2">
                        {service.title}
                      </h3>
                      <p className={`text-sm sm:text-base font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description - Responsive */}
                    <div className="sm:hidden">
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {service.mobileDescription}
                      </p>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features List - Mobile Optimized */}
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="text-sm sm:text-base font-medium text-gray-900">What's Included:</h4>
                      <div className="grid gap-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="flex items-center gap-3 sm:hidden">
                            <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{service.features[3]}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons - Mobile Optimized */}
                    <div className="flex flex-col gap-3 pt-2">
                      <Button
                        onClick={handleGetQuote}
                        className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg text-white px-4 sm:px-6 py-3 rounded-xl transition-all duration-200 group/btn`}
                      >
                        Get Free Quote
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                      
                      <Button
                        onClick={handleCall}
                        variant="outline"
                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 px-4 sm:px-6 py-3 rounded-xl transition-all duration-200"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        <span className="sm:hidden">Call Now</span>
                        <span className="hidden sm:inline">Call (04) 6934 9411</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section - Mobile Optimized */}
        <div className="text-center bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
          <h3 className="text-xl sm:text-2xl lg:text-3xl text-gray-900 mb-3 sm:mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Join hundreds of satisfied Melbourne homeowners. Get your free consultation and quote today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button 
              onClick={handleCall}
              size="lg"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Phone className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3" />
              Call (04) 6934 9411
            </Button>
            
            <Button 
              onClick={handleGetQuote}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-200"
            >
              Get Free Quote
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 sm:ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

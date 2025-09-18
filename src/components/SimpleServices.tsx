import { Button } from "./ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SimpleServices() {
  const handleGetQuote = () => {
    const element = document.querySelector('#quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCall = () => {
    window.location.href = 'tel:0469349411';
  };

  const services = [
    {
      title: "Bathroom Renovation",
      description: "Complete bathroom transformations with modern fixtures, premium finishes, and professional installation. From concept to completion.",
      features: ["Complete design service", "Premium fixtures & fittings", "Waterproofing included", "5-year warranty"],
      image: "https://images.unsplash.com/photo-1735538497321-fcdb11d4b9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHJlbm92YXRpb24lMjBtb2Rlcm4lMjBsdXh1cnl8ZW58MXx8fHwxNzU3MzQ0NzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Modern luxury bathroom renovation"
    },
    {
      title: "Floor & Wall Tiling",
      description: "Expert tiling services for both residential and commercial spaces. Precision installation with attention to every detail.",
      features: ["Premium tile selection", "Precision installation", "Floor & wall tiling", "Pattern & design service"],
      image: "https://images.unsplash.com/photo-1663249742655-443a6cf5e603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0aWxlJTIwaW5zdGFsbGF0aW9uJTIwZmxvb3J8ZW58MXx8fHwxNzU3MzQ0NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Professional tile installation and flooring"
    },
    {
      title: "Waterproofing",
      description: "Professional waterproofing solutions to protect your investment. Using premium membranes and proven techniques.",
      features: ["Premium membrane systems", "Bathroom waterproofing", "Balcony & outdoor areas", "Australian standards compliance"],
      image: "https://images.unsplash.com/photo-1749532125405-70950966b0e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcnByb29maW5nJTIwYmF0aHJvb20lMjBtZW1icmFuZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTczNDQ3NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Professional waterproofing membrane installation"
    },
    {
      title: "Screeding",
      description: "Quality screeding services for level, smooth surfaces. Essential preparation for premium flooring installations.",
      features: ["Self-leveling compounds", "Floor preparation", "Moisture protection", "Ready for final flooring"],
      image: "https://images.unsplash.com/photo-1633677095081-492aad9530d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMHNjcmVlZGluZyUyMGZsb29yJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1NzM0NDc2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Professional concrete screeding and floor preparation"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full border border-blue-100 mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="font-medium">Our Expertise</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl tracking-tight text-gray-900 mb-6">
            Professional Services
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specializing in four core areas of home renovation. Each service delivered with 
            professional expertise and attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20 lg:space-y-32">
          {services.map((service, index) => (
            <div key={service.title} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-6">
                  <h3 className="text-3xl lg:text-4xl text-gray-900">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    onClick={handleGetQuote}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-200 group"
                  >
                    Get Free Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button
                    onClick={handleCall}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl transition-all duration-200"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative group">
                  <div className="overflow-hidden rounded-2xl shadow-xl">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Service Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Professional Work</h4>
                          <p className="text-sm text-gray-600">Licensed & Insured</p>
                        </div>
                        <div className="text-sm font-medium text-blue-600">
                          5-Year Warranty
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 lg:mt-32 text-center bg-gray-50 rounded-3xl p-12 lg:p-16">
          <h3 className="text-3xl lg:text-4xl text-gray-900 mb-6">
            Ready to Start Your Project?
          </h3>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your renovation project. 
            Licensed professionals ready to bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleCall}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call (04) 6934 9411
            </Button>
            
            <Button
              onClick={handleGetQuote}
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-white px-8 py-4 rounded-xl text-lg transition-all duration-200"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
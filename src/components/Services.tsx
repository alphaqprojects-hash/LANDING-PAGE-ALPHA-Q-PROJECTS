import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ArrowRight, Home, Droplets, Grid3x3, Shield, Layers } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Home,
      title: "Home Renovation",
      description: "Complete home transformations with expert craftsmanship. From concept to completion, we bring your vision to life with quality materials and professional execution.",
      image: "https://images.unsplash.com/photo-1632214533040-eb166a3b172d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW50ZXJpb3IlMjByZW5vdmF0aW9uJTIwd29ya3xlbnwxfHx8fDE3NTcyNTQ0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Design consultation", "Project management", "Quality materials", "Licensed professionals"]
    },
    {
      icon: Droplets,
      title: "Bathroom Renovation",
      description: "Modern bathroom designs that combine functionality with luxury. From complete overhauls to targeted updates, we create spaces you'll love.",
      image: "https://images.unsplash.com/photo-1677553512940-f79af72efd1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc1NzI1NDQ0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Modern fixtures", "Custom layouts", "Waterproof installation", "Premium finishes"]
    },
    {
      icon: Grid3x3,
      title: "Floor and Wall Tiling",
      description: "Expert tiling services for kitchens, bathrooms, and living spaces. We work with premium materials to deliver flawless installations.",
      image: "https://images.unsplash.com/photo-1604589977707-d161da2edb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdGlsZSUyMGZsb29yJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc1NzI1NDQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Precision installation", "Pattern design", "Grout sealing", "Tile repairs"]
    },
    {
      icon: Shield,
      title: "Waterproofing",
      description: "Comprehensive waterproofing solutions to protect your property. Our advanced techniques ensure long-lasting protection against water damage.",
      image: "https://images.unsplash.com/photo-1635899669228-dbb4fba49ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHdhdGVycHJvb2ZpbmclMjBtZW1icmFuZXxlbnwxfHx8fDE3NTcyNTQ0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Membrane installation", "Leak detection", "Preventive solutions", "Warranty included"]
    },
    {
      icon: Layers,
      title: "Screeding",
      description: "Professional floor screeding for smooth, level surfaces. Essential preparation for flooring installations with precision leveling techniques.",
      image: "https://images.unsplash.com/photo-1698395480871-dbd2f1ead093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZsb29yJTIwbGV2ZWxpbmclMjBzY3JlZWR8ZW58MXx8fHwxNzU3MjU0NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Level correction", "Self-leveling compounds", "Quick drying", "Perfect finish"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Shield className="w-4 h-4" />
            <span className="text-sm">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900">
            Expert <span className="text-blue-600">Renovation</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From complete home transformations to specialized installations, AlphaQ Projects 
            delivers premium quality workmanship across all renovation disciplines.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="md:flex">
                  {/* Image Section */}
                  <div className="md:w-2/5 relative overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/5 p-8">
                    <h3 className="text-2xl mb-4 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 group/btn"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl lg:text-4xl mb-4">
            Ready to Start Your <span className="text-blue-200">Project?</span>
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your renovation project. 
            Our experts are ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl transition-all duration-300 bg-[rgba(3,1,1,1)]"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

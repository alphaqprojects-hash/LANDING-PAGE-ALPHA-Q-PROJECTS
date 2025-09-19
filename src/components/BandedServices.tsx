import { ServiceBand } from "./ServiceBand";

export function BandedServices() {
  return (
    <div className="bg-gray-50">
      {/* Section Header */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
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

      {/* Service Bands */}
      <ServiceBand
        id="home-renovation"
        bandColor="#2563eb"
        eyebrow="Complete Transformation"
        title="Full Home Renovation"
        body="Transform your entire home with our comprehensive renovation service. From initial design consultation to final walkthrough, we handle every detail of your home transformation with expert craftsmanship and premium materials."
        bullets={[
          "Architectural Design & Planning",
          "Premium Material Selection", 
          "Licensed Project Management",
          "Quality Assurance & 5-Year Warranty"
        ]}
        cta={{ 
          label: "Get Free Quote →", 
          href: "#contact" 
        }}
        visual={{
          type: "image",
          src: "https://images.unsplash.com/photo-1632214533040-eb166a3b172d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaW50ZXJpb3IlMjByZW5vdmF0aW9uJTIwd29ya3hlbnwxfHx8fDE3NTcyNTQ0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Modern home interior renovation showcasing open plan living space",
          aspect: "4/3",
          priority: true
        }}
      />

      <ServiceBand
        id="bathroom-renovation"
        bandColor="#4f46e5"
        eyebrow="Luxury Bathrooms"
        title="Bathroom Renovation"
        body="Create your perfect bathroom oasis with modern fixtures, custom layouts, and premium waterproof installations. We specialize in turning ordinary bathrooms into luxury spa-like retreats with attention to every detail."
        bullets={[
          "Custom Layout Design",
          "Premium Fixture Installation",
          "Advanced Waterproofing Systems", 
          "Heated Floor Installation"
        ]}
        cta={{ 
          label: "View Bathroom Projects →", 
          href: "#projects" 
        }}
        visual={{
          type: "image",
          src: "https://images.unsplash.com/photo-1677553512940-f79af72efd1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc1NzI1NDQ0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Luxury bathroom with modern fixtures and elegant design",
          aspect: "4/3"
        }}
        flip={true}
      />

      <ServiceBand
        id="tiling-services"
        bandColor="#059669"
        eyebrow="Expert Craftsmanship"
        title="Floor & Wall Tiling"
        body="Expert tiling services for kitchens, bathrooms, and living spaces. Our master craftsmen work with premium materials to deliver flawless installations with intricate pattern designs and perfect alignment."
        bullets={[
          "Precision Pattern Alignment",
          "Premium Ceramic & Natural Stone",
          "Advanced Adhesive Systems",
          "Lifetime Installation Warranty"
        ]}
        cta={{ 
          label: "See Tiling Portfolio →", 
          href: "#projects" 
        }}
        visual={{
          type: "image",
          src: "https://images.unsplash.com/photo-1604589977707-d161da2edb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdGlsZSUyMGZsb29yJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc1NzI1NDQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Professional ceramic tile installation with geometric patterns",
          aspect: "4/3"
        }}
      />

      <ServiceBand
        id="waterproofing"
        bandColor="#0891b2"
        eyebrow="Ultimate Protection"
        title="Advanced Waterproofing"
        body="Comprehensive waterproofing solutions using the latest membrane technology and advanced application techniques. Protect your investment with our industry-leading waterproofing systems and comprehensive warranty coverage."
        bullets={[
          "Advanced Membrane Technology",
          "Leak Detection & Prevention",
          "Preventive Maintenance Programs",
          "10-Year Protection Guarantee"
        ]}
        cta={{ 
          label: "Protect Your Home →", 
          href: "#contact" 
        }}
        visual={{
          type: "image",
          src: "https://images.unsplash.com/photo-1635899669228-dbb4fba49ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHdhdGVycHJvb2ZpbmclMjBtZW1icmFuZXxlbnwxfHx8fDE3NTcyNTQ0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Professional waterproofing membrane application in bathroom",
          aspect: "4/3"
        }}
        flip={true}
      />

      <ServiceBand
        id="screeding"
        bandColor="#7c3aed"
        eyebrow="Perfect Foundation"
        title="Professional Screeding"
        body="Professional floor screeding for perfectly smooth, level surfaces. Using precision laser leveling and quick-drying compounds, we create the ideal foundation for any flooring installation with guaranteed results."
        bullets={[
          "Laser Precision Leveling",
          "Self-Leveling Compound Systems",
          "Fast-Track Drying Technology",
          "Quality Surface Preparation"
        ]}
        cta={{ 
          label: "Get Screeding Quote →", 
          href: "#contact" 
        }}
        visual={{
          type: "image",
          src: "https://images.unsplash.com/photo-1698395480871-dbd2f1ead093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZsb29yJTIwbGV2ZWxpbmclMjBzY3JlZWR8ZW58MXx8fHwxNzU3MjU0NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Professional concrete floor leveling and screeding process",
          aspect: "4/3"
        }}
      />

      {/* Call to Action */}
      <section className="py-20 md:py-28">
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
    </div>
  );
}

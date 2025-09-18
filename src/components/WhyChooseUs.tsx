import { Shield, Award, Clock, Users, Star, CheckCircle, Zap, Heart } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "5-Year Warranty",
      description: "Every project backed by our comprehensive warranty",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      title: "Licensed & Insured",
      description: "Fully certified professionals you can trust",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Your schedule matters - we deliver when promised",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Star,
      title: "4.9★ Google Rating",
      description: "Consistently rated excellent by customers",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Users,
      title: "Expert Craftsmen",
      description: "10+ years of specialized renovation experience",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Zap,
      title: "Premium Materials",
      description: "Only the highest quality materials and finishes",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our top priority",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: CheckCircle,
      title: "No Hidden Costs",
      description: "Transparent pricing with detailed quotes",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const processes = [
    {
      step: "1",
      title: "Free Consultation",
      description: "We visit your home to understand your vision and requirements"
    },
    {
      step: "2", 
      title: "Detailed Quote",
      description: "Comprehensive quote with materials, timeline, and costs"
    },
    {
      step: "3",
      title: "Expert Installation",
      description: "Professional team delivers exceptional craftsmanship"
    },
    {
      step: "4",
      title: "Quality Guarantee",
      description: "Final inspection and 5-year warranty on all work"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            Why Melbourne Chooses
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> AlphaQ Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another renovation company. We're your trusted partners in creating 
            beautiful, functional spaces that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl text-gray-900 mb-4">Our Simple 4-Step Process</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial consultation to final warranty, we make your renovation journey smooth and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="text-center relative">
                {/* Step Number */}
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                  {process.step}
                </div>
                
                {/* Connecting Line (except last item) */}
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200 -z-10"></div>
                )}
                
                <h4 className="text-lg text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {[
            { number: "1000+", label: "Projects Completed", description: "Across Melbourne" },
            { number: "4.9★", label: "Google Rating", description: "150+ Reviews" },
            { number: "10+", label: "Years Experience", description: "Proven Track Record" },
            { number: "100%", label: "Satisfaction Rate", description: "Happy Customers" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-4xl text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl mb-4">Ready to Experience the AlphaQ Difference?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join over 1,000 satisfied Melbourne homeowners. Get your free consultation and detailed quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0469349411"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
              >
                Call (04) 6934 9411
              </a>
              <a 
                href="#quote"
                className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
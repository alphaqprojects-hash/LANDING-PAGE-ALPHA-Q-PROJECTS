import { Award, Shield, Clock, Users, Star, CheckCircle, Phone, ArrowRight, Heart, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const achievements = [
    {
      icon: Users,
      number: "1000+",
      label: "Happy Customers",
      description: "Successful projects completed"
    },
    {
      icon: Star,
      number: "4.9★",
      label: "Google Rating",
      description: "From 150+ verified reviews"
    },
    {
      icon: Clock,
      number: "10+",
      label: "Years Experience",
      description: "Serving Melbourne homes"
    },
    {
      icon: Award,
      number: "100%",
      label: "Licensed & Insured",
      description: "Complete peace of mind"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Quality Craftsmanship",
      description: "Every tile laid with precision, every surface waterproofed to perfection. We don't just complete projects - we create lasting transformations."
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Licensed, insured, and committed to transparency. Your home is your sanctuary, and we treat it with the respect it deserves."
    },
    {
      icon: Target,
      title: "Specialization Focus",
      description: "We excel in bathroom renovations, tiling, waterproofing, and screeding. By focusing on what we do best, we deliver exceptional results."
    }
  ];

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

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-100 mb-4 sm:mb-6">
            <Heart className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            <span className="text-sm font-medium">Our Story</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-gray-900 mb-4 sm:mb-6">
            About
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> AlphaQ Projects</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Melbourne's most trusted specialists in bathroom renovations, residential tiling, 
            waterproofing, and screeding services. Transforming homes with unmatched craftsmanship.
          </p>
        </div>

        {/* Story Section - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center mb-16 sm:mb-20 lg:mb-24">
          
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl text-gray-900 mb-4 sm:mb-6">
                Craftsmanship Meets Innovation
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Founded with a passion for exceptional craftsmanship, AlphaQ Projects has become Melbourne's 
                go-to specialist for residential renovation services. We focus exclusively on what we do best: 
                bathroom renovations, floor and wall tiling, waterproofing, and screeding.
              </p>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Every project reflects our commitment to quality, precision, and customer satisfaction. 
                We transform spaces into beautiful, functional areas that homeowners cherish for years to come.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {[
                "Licensed and fully insured for your complete protection",
                "Premium materials from trusted Australian suppliers",
                "Transparent pricing with detailed, no-surprise quotes",
                "Clean, respectful work practices in your home",
                "Comprehensive 5-year warranty on all work"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                onClick={handleCall}
                className="flex-1 sm:flex-none bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2 group"
              >
                <Phone className="w-4 h-4" />
                Call (04) 6934 9411
              </button>
              <button 
                onClick={handleGetQuote}
                className="flex-1 sm:flex-none border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl hover:bg-gray-50 transition-all duration-300 inline-flex items-center justify-center gap-2 group"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-1 lg:order-2">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-gray-50">
              <ImageWithFallback 
                src="https://res.cloudinary.com/ddmjt70x0/image/upload/v1757862854/our_story_zje5f6.png"
                alt="AlphaQ Projects team story - Professional bathroom renovation specialists in Melbourne"
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Floating Achievement Cards */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl text-blue-600 mb-1">1000+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div>
            
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-lg text-gray-900">4.9</span>
                <span className="text-sm text-gray-600">Google</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl lg:text-3xl text-gray-900 mb-4 sm:mb-6">
              Our Core Values
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              These principles guide every project we undertake and every relationship we build with our Melbourne clients.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 sm:p-8 bg-gray-50 rounded-2xl sm:rounded-3xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-blue-600 rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="text-center p-4 sm:p-6 lg:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-blue-50 rounded-2xl mb-3 sm:mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                <achievement.icon className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl text-gray-900 mb-1 sm:mb-2">
                {achievement.number}
              </div>
              <div className="text-sm lg:text-base text-gray-600 mb-1 sm:mb-2">
                {achievement.label}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 leading-tight">
                {achievement.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

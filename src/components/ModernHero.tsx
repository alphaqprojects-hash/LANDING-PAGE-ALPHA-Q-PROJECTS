import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedServiceText } from "./AnimatedServiceText";

export function ModernHero() {
  const handleGetQuote = () => {
    const element = document.querySelector('#quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn('Quote section not found');
    }
  };

  return (
    <section className="relative bg-white pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-gray-900 leading-tight">
                Melbourne's Premier
                <span className="block mt-2">
                  <AnimatedServiceText />
                </span>
                Specialists
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                Transform your space with expert craftsmanship. We deliver exceptional renovations 
                that add lasting value to your home.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                onClick={handleGetQuote}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition-all duration-200 group"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Simple Trust Indicator */}
            <div className="pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                Trusted by 1000+ Melbourne homeowners • Licensed & Insured
              </p>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full opacity-60 blur-3xl -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-blue-100 to-transparent rounded-full opacity-50 -z-10"></div>
              <div className="absolute top-1/2 -right-6 w-24 h-24 bg-blue-200 rounded-full opacity-30 -z-10"></div>
              
              {/* Main image container */}
              <div className="relative">
                {/* Image with enhanced styling using background-image for better control */}
                <div 
                  className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 h-80 sm:h-96 lg:h-[500px] xl:h-[600px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://res.cloudinary.com/ddmjt70x0/image/upload/v1757860613/hero_image_nbwvft.png')`,
                    backgroundPosition: 'center 20%',
                    backgroundSize: 'cover'
                  }}
                  role="img"
                  aria-label="Professional AlphaQ Projects team delivering premium bathroom renovations and tiling services in Melbourne"
                >
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  
                  {/* Quality badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-700">Premium Quality</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Years experience badge */}
                  <div className="absolute bottom-6 right-6">
                    <div className="bg-blue-600/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-500/20">
                      <div className="text-center text-white">
                        <div className="text-2xl mb-1">10+</div>
                        <div className="text-xs opacity-90">Years Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-4 left-8 w-3 h-3 bg-blue-400 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute top-1/3 -left-2 w-2 h-2 bg-blue-500 rounded-full opacity-80"></div>
                <div className="absolute bottom-1/4 -right-3 w-4 h-4 bg-blue-300 rounded-full opacity-60 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
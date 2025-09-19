import { Button } from "./ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedServiceText } from "./AnimatedServiceText";

export function Hero() {
  const handleCall = () => {
    window.location.href = 'tel:0469349411';
  };

  const handleQuote = () => {
    const element = document.querySelector('#quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 min-h-screen items-center py-16 lg:py-0">
          
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight text-gray-900">
                Melbourne's
                <br />
                <AnimatedServiceText />
                <br />
                Specialists
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-6 max-w-lg">
              <p className="text-xl text-gray-600 leading-relaxed">
                Premium bathroom renovations, expert tiling, waterproofing and screeding. 
                Licensed professionals delivering exceptional results across Melbourne.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Bathroom Renovation</h3>
                    <p className="text-gray-600">Complete bathroom transformations with premium finishes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Expert Tiling</h3>
                    <p className="text-gray-600">Precision floor and wall tiling with professional installation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Waterproofing & Screeding</h3>
                    <p className="text-gray-600">Professional waterproofing solutions and quality screeding</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleCall}
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-base transition-all duration-200"
              >
                Call (04) 6934 9411
              </Button>
              
              <Button
                onClick={handleQuote}
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg text-base transition-all duration-200"
              >
                Get Quote
              </Button>
            </div>
          </div>

          {/* Right Images */}
          <div className="lg:col-span-6 relative">
            <div className="grid gap-6">
              
              {/* Main Large Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1651442897558-47cff0f64bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMHJlbm92YXRpb24lMjBtb2Rlcm58ZW58MXx8fHwxNzU3MjYwMzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Premium bathroom renovation - AlphaQ Projects Melbourne"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>

              {/* Secondary Smaller Image */}
              <div className="grid grid-cols-2 gap-6">
                <div className="relative overflow-hidden rounded-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1667923869411-f998f790ce98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXRocm9vbSUyMHRpbGluZyUyMHdvcmt8ZW58MXx8fHwxNzU3MzQ0NjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Professional tiling work - AlphaQ Projects"
                    className="w-full h-[200px] lg:h-[240px] object-cover"
                  />
                </div>
                
                {/* Trust Badge */}
                <div className="flex flex-col justify-center">
                  <div className="bg-gray-50 rounded-2xl p-6 h-[200px] lg:h-[240px] flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                      
                      <div>
                        <div className="text-2xl font-medium text-gray-900 mb-2">200+</div>
                        <div className="text-gray-600 text-sm">Successful Projects Completed</div>
                      </div>
                      
                      <div className="pt-2">
                        <div className="text-sm text-blue-600">★★★★★ 4.9 Rating</div>
                        <div className="text-xs text-gray-500 mt-1">Licensed & Insured</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-Only Additional Content */}
      <div className="block lg:hidden px-6 pb-16">
        <div className="bg-gray-50 rounded-2xl p-6 text-center">
          <div className="space-y-4">
            <div className="flex justify-center gap-8">
              <div>
                <div className="text-2xl text-gray-900 mb-1">4.9★</div>
                <div className="text-sm text-gray-600">Google Rating</div>
              </div>
              <div>
                <div className="text-2xl text-gray-900 mb-1">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl text-gray-900 mb-1">200+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
            </div>
            <div className="text-sm text-gray-600">Licensed & Insured • 5-Year Warranty</div>
          </div>
        </div>
      </div>
    </section>
  );
}

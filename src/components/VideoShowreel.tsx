export function VideoShowreel() {
  return (
    <section className="relative w-full bg-gray-50">
      {/* Section Header - Mobile Optimized */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-100 mb-3 sm:mb-4 lg:mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
          <span className="text-sm font-medium">Showreel</span>
        </div>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-gray-900 mb-3 sm:mb-4 lg:mb-6 px-2 sm:px-0">
          See Our Work in
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Action</span>
        </h2>
        
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 lg:px-0">
          Watch how we transform Melbourne homes with our expert bathroom renovations, 
          professional tiling, and quality waterproofing solutions.
        </p>
      </div>

      {/* Clean Video Container - No UI Overlays */}
      <div className="relative w-full">
        {/* Video Wrapper with Better Mobile Heights */}
        <div className="relative w-full h-48 xs:h-56 sm:h-72 md:h-80 lg:h-96 xl:h-[500px] overflow-hidden bg-gray-900">
          
          {/* Clean Video Element */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source 
              src="https://res.cloudinary.com/ddmjt70x0/video/upload/f_auto,q_auto/AlphaQ_Projects_video_final_n8yzdq.mp4" 
              type="video/mp4" 
            />
            <source 
              src="https://res.cloudinary.com/ddmjt70x0/video/upload/f_auto,q_auto/AlphaQ_Projects_video_final_n8yzdq.webm" 
              type="video/webm" 
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Professional CTA Section */}
        <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-30 -translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-200 to-transparent rounded-full opacity-40 translate-x-16 translate-y-16"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-100 rounded-full opacity-20 -translate-x-12 -translate-y-12"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
            
            {/* CTA Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-6 sm:mb-8 shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Ready to Start?</span>
            </div>
            
            {/* Main CTA Headline */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight text-gray-900 mb-4 sm:mb-6">
              Transform Your Space with 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Expert Craftsmanship</span>
            </h3>
            
            {/* CTA Description */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4 sm:px-0">
              Join over 1,000 satisfied Melbourne homeowners who've trusted us with their renovation dreams. 
              Get your free consultation today.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-10">
              <a 
                href="tel:0469349411"
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl transition-all duration-300 w-full sm:w-auto text-center font-medium shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call (04) 6934 9411
                <span className="text-xs opacity-75 block">Instant Response</span>
              </a>
              
              <button 
                onClick={() => {
                  const element = document.querySelector('#quote');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 w-full sm:w-auto font-medium transform hover:-translate-y-1 flex items-center justify-center gap-3 bg-white shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Get Free Quote
                <span className="text-xs opacity-75 block">No Obligation</span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span>Licensed & Insured</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span>10+ Years Experience</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
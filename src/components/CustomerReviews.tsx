import { Star, Quote } from 'lucide-react';

export function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Mitchell",
      location: "Brighton, Melbourne",
      service: "Bathroom Renovation",
      rating: 5,
      date: "2 weeks ago",
      review: "Absolutely fantastic work! AlphaQ Projects transformed our outdated bathroom into a luxury spa-like retreat. The attention to detail was incredible, and they completed everything on time and within budget. The waterproofing is top-notch and the tiling is perfect. Highly recommend!",
      avatar: "SM"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "South Yarra, Melbourne", 
      service: "Residential Tiling",
      rating: 5,
      date: "1 month ago",
      review: "Outstanding tiling work in our kitchen and laundry. The team was professional, clean, and delivered exactly what they promised. The precision of the tile installation is remarkable - every line is perfect. Great communication throughout the project.",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "Hawthorn, Melbourne",
      service: "Waterproofing",
      rating: 5,
      date: "3 weeks ago", 
      review: "Had our basement waterproofed by AlphaQ Projects and couldn't be happier. They explained the entire process, used quality materials, and provided excellent warranty coverage. No more moisture issues! Professional team that takes pride in their work.",
      avatar: "ET"
    },
    {
      id: 4,
      name: "David Wilson",
      location: "Richmond, Melbourne",
      service: "Bathroom Renovation",
      rating: 5,
      date: "1 month ago",
      review: "From design to completion, AlphaQ Projects exceeded our expectations. Our new bathroom is absolutely beautiful - modern, functional, and built to last. The team was respectful of our home and cleaned up perfectly each day. Worth every penny!",
      avatar: "DW"
    },
    {
      id: 5,
      name: "Lisa Rodriguez",
      location: "Kew, Melbourne",
      service: "Floor Screeding",
      rating: 5,
      date: "2 months ago",
      review: "Needed floor screeding before our new tiles and AlphaQ delivered perfection. The floor is completely level and smooth - exactly what we needed. Professional service, fair pricing, and excellent workmanship. Will definitely use them again.",
      avatar: "LR"
    },
    {
      id: 6,
      name: "James Anderson",
      location: "Toorak, Melbourne",
      service: "Multiple Services",
      rating: 5,
      date: "6 weeks ago",
      review: "AlphaQ Projects handled our bathroom renovation, tiling, and waterproofing all in one project. Seamless coordination, excellent craftsmanship, and great value. They're clearly experts in their field and I wouldn't hesitate to recommend them to anyone.",
      avatar: "JA"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            What Our Customers
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Melbourne homeowners are saying about their experience with AlphaQ Projects.
          </p>
          
          {/* Google Rating Summary */}
          <div className="mt-8 inline-flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="text-3xl text-gray-900 mb-1">4.9</div>
              <div className="flex items-center gap-1 mb-2">
                {renderStars(5)}
              </div>
              <div className="text-sm text-gray-600">Google Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl text-gray-900 mb-1">150+</div>
              <div className="text-sm text-gray-600">Customer Reviews</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl text-gray-900 mb-1">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{review.review}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">{review.avatar}</span>
                </div>
                <div>
                  <div className="text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.location}</div>
                  <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full inline-block mt-1">
                    {review.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl mb-4">Ready to Join Our Happy Customers?</h3>
            <p className="text-blue-100 mb-6">
              Experience the AlphaQ Projects difference for yourself. Get your free quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#quote"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                Get Free Quote
              </a>
              <a 
                href="tel:0469349411"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                Call (04) 6934 9411
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { MapPin, Calendar, ArrowRight, Filter } from 'lucide-react';

const projectCategories = [
  { id: 'all', name: 'All Projects', count: 9 },
  { id: 'bathroom', name: 'Bathroom Renovation', count: 4 },
  { id: 'tiling', name: 'Residential Tiling', count: 3 },
  { id: 'waterproofing', name: 'Waterproofing', count: 2 }
];

const projects = [
  {
    id: 1,
    title: "Modern Bathroom Transformation",
    category: "bathroom",
    location: "Toorak, Melbourne",
    duration: "3 weeks",
    description: "Complete bathroom renovation featuring premium fixtures, marble tiles, and modern lighting.",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1682888818696-906287d759f5?w=400&h=300&fit=crop",
    features: ["Waterproofing", "Premium Tiles", "Modern Fixtures", "LED Lighting"],
    year: "2024"
  },
  {
    id: 2,
    title: "Basement Waterproofing Project",
    category: "waterproofing", 
    location: "Brighton, Melbourne",
    duration: "2 weeks",
    description: "Complete basement waterproofing with advanced membrane systems and drainage solutions.",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?w=400&h=300&fit=crop",
    features: ["Membrane Systems", "Drainage Solutions", "Moisture Control", "Long-term Protection"],
    year: "2024"
  },
  {
    id: 3,
    title: "Wet Area Waterproofing",
    category: "waterproofing",
    location: "South Yarra, Melbourne", 
    duration: "1 week",
    description: "Professional waterproofing for shower and bathroom wet areas with premium materials.",
    beforeImage: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?w=400&h=300&fit=crop",
    features: ["Wet Area Sealing", "Premium Materials", "Compliance Certificates", "5-Year Warranty"],
    year: "2024"
  },
  {
    id: 4,
    title: "Premium Floor Tiling Project",
    category: "tiling",
    location: "Caulfield, Melbourne",
    duration: "2 weeks", 
    description: "Large format porcelain tiles installation with precision cutting and seamless finish.",
    beforeImage: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1708919268841-27c120c45a92?w=400&h=300&fit=crop",
    features: ["Large Format Tiles", "Precision Cutting", "Waterproofing", "Grout Sealing"],
    year: "2023"
  },
  {
    id: 5,
    title: "Master Bathroom Suite",
    category: "bathroom",
    location: "Malvern, Melbourne",
    duration: "4 weeks",
    description: "Luxury master bathroom with freestanding bath, walk-in shower, and heated floors.",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?w=400&h=300&fit=crop",
    features: ["Heated Floors", "Walk-in Shower", "Freestanding Bath", "Premium Fixtures"],
    year: "2023"
  },
  {
    id: 6,
    title: "Kitchen Floor Tiling",
    category: "tiling",
    location: "Hawthorn, Melbourne",
    duration: "1 week",
    description: "Beautiful residential kitchen floor tiling with premium porcelain tiles and underfloor heating preparation.",
    beforeImage: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1732552933763-38484166f4ad?w=400&h=300&fit=crop",
    features: ["Premium Porcelain Tiles", "Underfloor Heating Ready", "Perfect Level Installation", "Seamless Finish"],
    year: "2023"
  },
  {
    id: 7,
    title: "Laundry Room Renovation",
    category: "tiling",
    location: "Richmond, Melbourne",
    duration: "3 days",
    description: "Complete laundry room tiling with waterproof wall tiles and durable floor installation.",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1667923869411-f998f790ce98?w=400&h=300&fit=crop",
    features: ["Waterproof Wall Tiles", "Slip-Resistant Flooring", "Easy-Clean Surfaces", "Modern Design"],
    year: "2024"
  }
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showBeforeAfter, setShowBeforeAfter] = useState<{ [key: number]: boolean }>({});

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const toggleBeforeAfter = (projectId: number) => {
    setShowBeforeAfter(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 bg-blue-50 text-blue-600 border-blue-200">
            Our Work
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our portfolio of successful renovations across Melbourne. Each project showcases our commitment to quality craftsmanship and attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.name}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={showBeforeAfter[project.id] ? project.beforeImage : project.afterImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Before/After Toggle */}
                <button
                  onClick={() => toggleBeforeAfter(project.id)}
                  className="absolute top-4 left-4 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium text-gray-900 hover:bg-white transition-all duration-300 shadow-lg"
                >
                  {showBeforeAfter[project.id] ? 'Show After' : 'Show Before'}
                </button>

                {/* Category Badge */}
                <Badge 
                  className="absolute top-4 right-4 bg-blue-600 text-white border-0 shadow-lg"
                >
                  {projectCategories.find(cat => cat.id === project.category)?.name.split(' ')[0]}
                </Badge>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <Calendar className="w-4 h-4" />
                  <span>{project.duration}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.slice(0, 2).map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      +{project.features.length - 2} more
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Button 
                  variant="outline"
                  className="w-full group/btn border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  View Project Details
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers across Melbourne. Get a free consultation and quote for your renovation project today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.location.href = 'tel:0469349411'}
            >
              Call (04) 6934 9411
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-gray-200 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-lg transition-all duration-300"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Free Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-100">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">4.9★</div>
              <div className="text-sm text-gray-600">Google Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
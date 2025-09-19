import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { MapPin, Calendar, ArrowRight, Eye, Star, Award, Clock, Users, CheckCircle, Phone } from 'lucide-react';

const projectCategories = [
  { id: 'all', name: 'All Projects', count: 8 },
  { id: 'bathroom', name: 'Bathroom', count: 4 },
  { id: 'tiling', name: 'Tiling', count: 3 },
  { id: 'waterproofing', name: 'Waterproofing', count: 1 }
];

const projects = [
  {
    id: 1,
    title: "Luxury Master Bathroom Transformation",
    category: "bathroom",
    location: "Toorak, Melbourne",
    duration: "3 weeks",
    year: "2024",
    budget: "$45,000",
    description: "Complete luxury bathroom renovation featuring premium marble finishes, heated floors, and spa-quality fixtures that transformed an outdated space into a personal retreat.",
    mobileDescription: "Luxury bathroom with premium marble, heated floors, and spa fixtures.",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1721523262910-c438933f673f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMHJlbm92YXRpb24lMjBtYXJibGUlMjBtb2Rlcm58ZW58MXx8fHwxNzU3MzQ1NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Carrara Marble Walls", "Heated Floors", "Rainfall Shower", "Smart Lighting"],
    highlights: ["Award-winning design", "30% property value increase"],
    clientSatisfaction: 5,
    specialty: "Premium"
  },
  {
    id: 2,
    title: "Contemporary Bathroom Suite",
    category: "bathroom",
    location: "Brighton, Melbourne",
    duration: "2.5 weeks",
    year: "2024",
    budget: "$32,000",
    description: "Modern bathroom renovation featuring elegant vanity with marble countertops, perfect lighting, and sleek contemporary design elements.",
    mobileDescription: "Contemporary bathroom with marble countertops and modern lighting.",
    beforeImage: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=600&h=400&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1741472288683-af40b1f6a6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBiYXRocm9vbSUyMHZhbml0eSUyMG1hcmJsZXxlbnwxfHx8fDE3NTc4NTkyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Marble Countertops", "LED Strip Lighting", "Floating Vanity", "Large Mirror"],
    highlights: ["Client's favorite room", "Perfect functionality"],
    clientSatisfaction: 5,
    specialty: "Contemporary"
  },
  {
    id: 3,
    title: "Premium Floor Tiling Installation",
    category: "tiling",
    location: "Caulfield, Melbourne",
    duration: "2 weeks",
    year: "2024",
    budget: "$18,000",
    description: "Precision installation of large format porcelain tiles with seamless finish and perfect alignment throughout the entire space.",
    mobileDescription: "Large format porcelain tiles with precision installation and seamless finish.",
    beforeImage: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=600&h=400&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1604589977707-d161da2edb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMGZvcm1hdCUyMHBvcmNlbGFpbiUyMGZsb29yJTIwdGlsZXN8ZW58MXx8fHwxNzU3ODU5MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Large Format Tiles", "Precision Cutting", "Seamless Finish", "Grout Sealing"],
    highlights: ["Flawless installation", "Ahead of schedule"],
    clientSatisfaction: 5,
    specialty: "Precision"
  },
  {
    id: 4,
    title: "Premium Bathroom Wall Tiling",
    category: "tiling",
    location: "South Yarra, Melbourne",
    duration: "1.5 weeks",
    year: "2024",
    budget: "$12,500",
    description: "Expert bathroom wall tiling installation featuring premium ceramic tiles with perfect alignment and professional waterproof sealing.",
    mobileDescription: "Premium bathroom wall tiling with ceramic tiles and waterproof sealing.",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1570087595560-62802e40c735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGNlcmFtaWMlMjB3YWxsJTIwdGlsZXMlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzU3ODU5MjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Premium Ceramic Tiles", "Waterproof Sealing", "Perfect Alignment", "Professional Grouting"],
    highlights: ["Zero maintenance issues", "Flawless finish"],
    clientSatisfaction: 5,
    specialty: "Premium"
  },
  {
    id: 5,
    title: "Professional Waterproofing System",
    category: "waterproofing",
    location: "Malvern, Melbourne",
    duration: "1 week",
    year: "2024",
    budget: "$12,000",
    description: "Comprehensive waterproofing solution using premium membranes and advanced techniques for long-lasting protection.",
    mobileDescription: "Professional waterproofing with premium membranes and long-lasting protection.",
    beforeImage: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=600&h=400&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1559126698-1906840f3c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcnByb29maW5nJTIwbWVtYnJhbmUlMjBiYXRocm9vbSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTc4NTkyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Premium Membranes", "Advanced Techniques", "Compliance Certified", "5-Year Warranty"],
    highlights: ["Zero leakage issues", "Australian standards"],
    clientSatisfaction: 5,
    specialty: "Professional"
  },
  {
    id: 6,
    title: "Spa-Style Bathroom Retreat",
    category: "bathroom",
    location: "Hawthorn, Melbourne",
    duration: "4 weeks",
    year: "2023",
    budget: "$38,000",
    description: "Luxurious spa-style bathroom featuring walk-in shower, premium finishes, and thoughtful design creating a private sanctuary.",
    mobileDescription: "Spa-style bathroom with walk-in shower and premium finishes.",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop&auto=format",
    afterImage: "https://images.unsplash.com/photo-1706670368974-af427a98e816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBiYXRocm9vbSUyMHdhbGslMjBpbiUyMHNob3dlciUyMGx1eHVyeXxlbnwxfHx8fDE3NTc4NTkyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Walk-in Shower", "Natural Stone", "Spa Lighting", "Premium Hardware"],
    highlights: ["Magazine-featured", "Daily use satisfaction"],
    clientSatisfaction: 5,
    specialty: "Spa-Style"
  }
];

export function AttractiveProjects() {
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

  const handleCall = () => {
    window.location.href = 'tel:0469349411';
  };

  const handleGetQuote = () => {
    const element = document.querySelector('#quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn('Quote section not found');
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-100 mb-4 sm:mb-6">
            <Award className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            <span className="text-sm font-medium">Portfolio</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-gray-900 mb-4 sm:mb-6">
            Recent
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Projects</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Discover our portfolio of exceptional renovations across Melbourne showcasing 
            quality craftsmanship and customer satisfaction.
          </p>
        </div>

        {/* Category Filter - Mobile Optimized */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 px-4 sm:px-0">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 font-medium text-sm ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="sm:hidden">{category.name}</span>
              <span className="hidden sm:inline">
                {category.id === 'bathroom' ? 'Bathroom Renovation' : 
                 category.id === 'tiling' ? 'Premium Tiling' : 
                 category.id === 'waterproofing' ? 'Waterproofing' : 'All Projects'}
              </span>
              <span className={`ml-1.5 sm:ml-2 px-1.5 sm:px-2 py-0.5 rounded-full text-xs ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid - Mobile Optimized */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="group bg-white rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
              
              {/* Project Image - Mobile Optimized */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={showBeforeAfter[project.id] ? project.beforeImage : project.afterImage}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 lg:h-64 xl:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Before/After Toggle - Mobile Optimized */}
                <button
                  onClick={() => toggleBeforeAfter(project.id)}
                  className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium text-gray-900 hover:bg-white transition-all duration-300 shadow-lg border border-white/20"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Eye className="w-3 sm:w-4 h-3 sm:h-4" />
                    <span className="sm:hidden">{showBeforeAfter[project.id] ? 'After' : 'Before'}</span>
                    <span className="hidden sm:inline">{showBeforeAfter[project.id] ? 'Show After' : 'Show Before'}</span>
                  </div>
                </button>

                {/* Specialty Badge - Mobile Optimized */}
                <Badge className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 bg-blue-600 text-white border-0 shadow-lg text-xs sm:text-sm">
                  {project.specialty}
                </Badge>

                {/* Rating & Budget - Mobile Optimized */}
                <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6 flex items-center justify-between">
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    {[...Array(project.clientSatisfaction)].map((_, i) => (
                      <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/20">
                    <span className="text-xs sm:text-sm font-medium text-gray-900">{project.budget}</span>
                  </div>
                </div>
              </div>

              {/* Content Section - Mobile Optimized */}
              <div className="p-5 sm:p-6 lg:p-8">
                
                {/* Project Meta - Mobile Optimized */}
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <MapPin className="w-3 sm:w-4 h-3 sm:h-4" />
                    <span className="truncate">{project.location}</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <span className="font-medium text-gray-700">{project.year}</span>
                </div>

                {/* Title - Mobile Optimized */}
                <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>

                {/* Description - Responsive */}
                <div className="sm:hidden mb-4">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {project.mobileDescription}
                  </p>
                </div>
                <div className="hidden sm:block mb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features - Mobile Optimized */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <h4 className="text-sm sm:text-base font-medium text-gray-900">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 sm:gap-3">
                        <CheckCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights - Mobile Optimized */}
                <div className="mb-5 sm:mb-6">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-50 text-blue-700 text-xs rounded-lg border border-blue-100"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons - Mobile Optimized */}
                <div className="flex flex-col gap-2.5 sm:gap-3">
                  <Button
                    onClick={handleGetQuote}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-3 rounded-xl transition-all duration-200 group/btn text-sm sm:text-base"
                  >
                    Get Similar Quote
                    <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button
                    onClick={handleCall}
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 px-4 sm:px-6 py-3 rounded-xl transition-all duration-200 text-sm sm:text-base"
                  >
                    <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2" />
                    <span className="sm:hidden">Call Now</span>
                    <span className="hidden sm:inline">Discuss Project</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section - Mobile Optimized */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {[
            { icon: <Users className="w-5 sm:w-6 h-5 sm:h-6" />, number: "1000+", label: "Happy Clients" },
            { icon: <Star className="w-5 sm:w-6 h-5 sm:h-6" />, number: "4.9★", label: "Google Rating" },
            { icon: <Clock className="w-5 sm:w-6 h-5 sm:h-6" />, number: "10+", label: "Years Experience" },
            { icon: <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6" />, number: "98%", label: "On-Time Delivery" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-blue-50 text-blue-600 mb-3 sm:mb-4">
                {stat.icon}
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section - Mobile Optimized */}
        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-16 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-900 mb-4 sm:mb-6">
            Ready to Start Your Project?
          </h3>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Join over 1000 satisfied Melbourne homeowners who chose AlphaQ Projects. 
            Get a free consultation and quote today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button
              onClick={handleCall}
              size="lg"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3" />
              Call (04) 6934 9411
            </Button>
            
            <Button
              onClick={handleGetQuote}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-200"
            >
              Get Free Quote
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 sm:ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

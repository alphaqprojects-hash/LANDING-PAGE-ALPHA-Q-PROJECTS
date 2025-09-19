import { Navigation } from "./components/Navigation";
import { ModernHero } from "./components/ModernHero";
import { VideoShowreel } from "./components/VideoShowreel";
import { AttractiveServices } from "./components/AttractiveServices";
import { AttractiveProjects } from "./components/AttractiveProjects";
import { About } from "./components/About";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { GetQuote } from "./components/GetQuote";
import { CustomerReviews } from "./components/CustomerReviews";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Home Section */}
      <section id="home">
        <ModernHero />
      </section>
      
      {/* Video Showreel Section */}
      <VideoShowreel />
      
      {/* Services Section */}
      <section id="services">
        <AttractiveServices />
      </section>
      
      {/* Projects Section */}
      <section id="projects">
        <AttractiveProjects />
      </section>
      
      {/* About Section */}
      <section id="about">
        <About />
      </section>
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Get Quote Section */}
      <section id="quote">
        <GetQuote />
      </section>
      
      {/* Customer Reviews Section */}
      <section id="reviews">
        <CustomerReviews />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

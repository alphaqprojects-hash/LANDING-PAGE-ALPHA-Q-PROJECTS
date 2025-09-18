import { useState, useEffect } from 'react';

export function AnimatedServiceText() {
  const services = [
    "Bathroom Renovation",
    "Floor & Wall Tiling", 
    "Waterproofing",
    "Screeding"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setIsVisible(false);
      
      // After fade out completes, update indices and fade in
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % services.length);
        setIsVisible(true);
      }, 400); // Match transition duration
      
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [nextIndex, services.length]);

  return (
    <div className="relative inline-block">
      <div
        className={`transition-all duration-400 ease-in-out transform ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-4 opacity-0'
        }`}
      >
        <span className="text-blue-600 block leading-tight tracking-tight">
          {services[currentIndex]}
        </span>
      </div>
    </div>
  );
}
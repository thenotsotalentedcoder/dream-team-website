import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import home1 from '../assets/team/home1.jpg';
import home2 from '../assets/team/home2.jpg';
import home3 from '../assets/team/home3.jpg';
import home4 from '../assets/team/home4.jpg';
import home5 from '../assets/team/home5.jpg';


const Hero = () => {
  const arrowRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background slideshow images - using high-quality images that will be clearly visible
  const backgroundImages = [
    home1,
    home2,
    home3,
    home4,
    home5
  ];


  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    // Create a bouncing animation for the scroll arrow
    const arrowAnimation = () => {
      if (arrowRef.current) {
        const animation = arrowRef.current.animate(
          [
            { transform: 'translateY(0)' },
            { transform: 'translateY(10px)' },
            { transform: 'translateY(0)' }
          ],
          {
            duration: 2000,
            iterations: Infinity
          }
        );
        return animation;
      }
      return null;
    };

    const animation = arrowAnimation();
    
    return () => {
      if (animation) animation.cancel();
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background slideshow with higher opacity */}
      {backgroundImages.map((image, index) => (
        <div 
          key={index}
          className="absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ease-in-out"
          style={{ 
            backgroundImage: `url(${image})`,
            opacity: currentSlide === index ? 0.7 : 0, // Increased from 0.3 to 0.7
            zIndex: 0
          }}
        />
      ))}
      
      {/* Gradient overlay with reduced opacity for better image visibility */}
      <div 
        className="absolute inset-0 z-10"
        style={{ 
          background: 'linear-gradient(135deg, rgba(26, 38, 57, 0.7) 0%, rgba(78, 205, 196, 0.6) 100%)' // Reduced opacity
        }}
      ></div>

      {/* Text shadow container to ensure readability against any background */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="absolute w-full h-full bg-black opacity-30"></div> {/* Dark overlay just behind text */}
      </div>

      {/* Background floating particles with reduced quantity */}
      <div className="absolute inset-0 overflow-hidden opacity-40 z-20">
        {Array.from({ length: 10 }).map((_, index) => ( // Reduced number of particles
          <motion.div 
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-30 relative">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg" // Added text shadow
            style={{ 
              fontFamily: 'Clash Display, sans-serif',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' // Strong text shadow for readability
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            DREAM TEAM
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto font-light drop-shadow-lg" // Added text shadow
            style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }} // Text shadow for readability
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Seven friends. One journey. Countless memories.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <span 
              ref={arrowRef}
              onClick={scrollToAbout}
              className="cursor-pointer inline-block text-white drop-shadow-lg" // Added shadow
            >
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="hover:text-teal-300 transition-colors"
                style={{ filter: 'drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.5))' }} // Shadow for the arrow
              >
                <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
              </svg>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
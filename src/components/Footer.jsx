import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const gradientRef = useRef(null);
  
  // Animation for gradient background - using theme colors
  useEffect(() => {
    const gradientElement = gradientRef.current;
    if (!gradientElement) return;
    
    let progress = 0;
    
    const animateGradient = () => {
      progress = (progress + 0.001) % 1;
      
      // Use your theme colors - navy (#1a2639) and teal (#4ecdc4)
      const color1 = '#1a2639'; // Navy
      const color2 = '#4ecdc4'; // Teal
      
      // Calculate intermediate position based on progress
      const angle = 135 + (Math.sin(progress * Math.PI * 2) * 15);
      
      gradientElement.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
      
      requestAnimationFrame(animateGradient);
    };
    
    const animationId = requestAnimationFrame(animateGradient);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer 
      className="py-8 relative overflow-hidden" 
      ref={gradientRef}
      style={{ background: 'linear-gradient(135deg, #1a2639, #4ecdc4)' }}
    >
      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.div 
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              x: [0, Math.random() * 50 - 25],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-4"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Main content section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Logo and tagline */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold text-white mb-2">Dream Team</h2>
              <p className="text-white text-opacity-80 text-sm">
                Seven friends on different paths, connected by unbreakable bonds.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2 text-white">Quick Links</h3>
              <ul className="space-y-1">
                <li>
                  <button 
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                    className="text-white text-opacity-80 hover:text-opacity-100 transition-colors cursor-pointer bg-transparent border-none p-0 text-sm"
                  >
                    Our Story
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('team').scrollIntoView({ behavior: 'smooth' })}
                    className="text-white text-opacity-80 hover:text-opacity-100 transition-colors cursor-pointer bg-transparent border-none p-0 text-sm"
                  >
                    Meet The Team
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('memories').scrollIntoView({ behavior: 'smooth' })}
                    className="text-white text-opacity-80 hover:text-opacity-100 transition-colors cursor-pointer bg-transparent border-none p-0 text-sm"
                  >
                    Memories
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2 text-white">Contact</h3>
              <p className="text-white text-opacity-80 text-sm mb-1">Have questions or want to connect?</p>
              <a 
                href="mailto:dreamteam@example.com" 
                className="text-white hover:underline text-sm"
              >
                malikmuzammilarman@gmail.com
              </a>
            </div>
          </div>
          
          {/* Copyright - slim section */}
          <div className="pt-4 border-t border-white border-opacity-20 text-center">
            <p className="text-white text-opacity-60 text-xs">
              &copy; {currentYear} Dream Team. All rights reserved.
            </p>
            <p className="text-white text-opacity-80 mt-1 text-xs">
              Made with ❤️ by @thenotsotalentedcoder
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
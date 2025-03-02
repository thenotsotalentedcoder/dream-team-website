import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import m1 from '../assets/memories/m1.jpg';
import m2 from '../assets/memories/m2.jpg';
import m3 from '../assets/memories/m3.jpg';
import m4 from '../assets/memories/m4.jpg';
import m5 from '../assets/memories/m5.jpg';
import m6 from '../assets/memories/m6.jpg';
import m7 from '../assets/memories/m7.jpg';
import m8 from '../assets/memories/m8.jpg';
import m9 from '../assets/memories/m9.jpg';
import m10 from '../assets/memories/m10.jpg';
import m11 from '../assets/memories/m11.jpg';
import m12 from '../assets/memories/m12.jpg';
import m13 from '../assets/memories/m13.jpg';
import m14 from '../assets/memories/m14.jpg';
import m15 from '../assets/memories/m15.jpg';
import m16 from '../assets/memories/m16.jpg';
import m17 from '../assets/memories/m17.jpg';
import m18 from '../assets/memories/m18.jpg';
import m19 from '../assets/memories/m19.jpg';
import m20 from '../assets/memories/m20.jpg';
import m21 from '../assets/memories/m21.jpg';
import m22 from '../assets/memories/m22.jpg';
import m23 from '../assets/memories/m23.jpg';
import m24 from '../assets/memories/m24.jpg';
import m25 from '../assets/memories/m25.jpg';
import m26 from '../assets/memories/m26.jpg';
import m27 from '../assets/memories/m27.jpg';
import m28 from '../assets/memories/m28.jpg';

const MemoriesGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const galleryRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Memory images with direct URLs to visually striking images
  const images = [
    { 
      id: 1, 
      src: m1, 
      caption: "Hypercube", 
      year: "2022"
    },
    { 
      id: 2, 
      src: m2,
      caption: "North Nazimabad Visit", 
      year: "2023"
    },
    { 
      id: 3, 
      src: m3, 
      caption: "Graduation", 
      year: "2023"
    },
    { 
      id: 4, 
      src: m4, 
      caption: "Epsilon", 
      year: "2023"
    },
    { 
      id: 5, 
      src: m5, 
      caption: "Hamza's Sister Wedding", 
      year: "2022"
    },
    { 
      id: 6, 
      src: m6, 
      caption: "Farewell Meetup", 
      year: "2023"
    },
    { 
      id: 7, 
      src: m7, 
      caption: "Scinnova Win", 
      year: "2022"
    },
    { 
      id: 8, 
      src: m8, 
      caption: "Culture Day", 
      year: "2022"
    },
    { 
      id: 9, 
      src: m9, 
      caption: "Farewell Meetup", 
      year: "2023"
    },
    { 
      id: 10, 
      src: m10, 
      caption: "Sceptre Sonic x Cosmos", 
      year: "2022"
    },
    { 
      id: 11, 
      src: m11, 
      caption: "College Farewell", 
      year: "2023"
    },
    { 
      id: 12, 
      src: m12, 
      caption: "College Farewell", 
      year: "2023"
    },
    { 
      id: 13, 
      src: m13, 
      caption: "NSK", 
      year: "2023"
    },
    { 
      id: 14, 
      src: m14, 
      caption: "BVS Visit", 
      year: "2023"
    },
    { 
      id: 15, 
      src: m15, 
      caption: "Hamza's Sister Wedding", 
      year: "2022"
    },
    { 
      id: 16, 
      src: m16, 
      caption: "School Batch Photo", 
      year: "2021"
    },
    { 
      id: 17, 
      src: m17, 
      caption: "Gowning Ceremony Day", 
      year: "2022"
    },
    { 
      id: 18, 
      src: m18, 
      caption: "NSK", 
      year: "2022"
    },
    { 
      id: 19, 
      src: m19, 
      caption: "Scinnova", 
      year: "2022"
    },
    { 
      id: 20, 
      src: m20, 
      caption: "Scinnova", 
      year: "2022"
    },
    { 
      id: 21, 
      src: m21, 
      caption: "Cedar Class", 
      year: "2021"
    },
    { 
      id: 22, 
      src: m22, 
      caption: "Cosmos", 
      year: "2022"
    },
    { 
      id: 23, 
      src: m23, 
      caption: "SMCHS Meetup", 
      year: "2022"
    },
    { 
      id: 24, 
      src: m24, 
      caption: "Scinnova Win", 
      year: "2022"
    },
    { 
      id: 25, 
      src: m25, 
      caption: "Saad's Birthday", 
      year: "2022"
    },
    { 
      id: 26, 
      src: m26, 
      caption: "School Farewell", 
      year: "2021"
    },
    { 
      id: 27, 
      src: m27, 
      caption: "Cosmos", 
      year: "2022"
    },
    { 
      id: 28, 
      src: m28, 
      caption: "Seniors Farewell School", 
      year: "2021"
    }
  ];

  // Duplicate the images for continuous scrolling
  const allImages = [...images, ...images];

  // Automatic scrolling effect
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery || !inView || isPaused) return;
    
    let animationId;
    const scrollSpeed = 1; // pixels per frame
    
    const animate = () => {
      if (gallery.scrollLeft >= (gallery.scrollWidth / 2) - 10) {
        // Reset scroll position when reaching halfway
        gallery.scrollLeft = 0;
      } else {
        gallery.scrollLeft += scrollSpeed;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [inView, isPaused]);

  // Handle mouse enter/leave to pause/resume scrolling
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Get color based on year
  const getColorForYear = (year) => {
    switch (year) {
      case '2021':
        return '#4ecdc4'; // teal
      case '2022':
        return '#ff6b6b'; // coral
      case '2023':
        return '#ffc145'; // gold
      default:
        return '#1a2639'; // navy
    }
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7
      }
    }
  };

  return (
    <section id="memories" className="py-20 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          style={{ color: '#1a2639' }}
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          Our Memories
        </motion.h2>
        
        {/* Horizontal scrolling gallery */}
        <div 
          ref={galleryRef}
          className="flex overflow-x-auto hide-scrollbar pb-8"
          style={{ scrollBehavior: 'smooth' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex space-x-6 py-4 px-4">
            {allImages.map((image, index) => (
              <div 
                key={`${image.id}-${index}`}
                className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ 
                  width: '320px',
                  height: '220px',
                  flexShrink: 0
                }}
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.caption} 
                  className="w-full h-full object-cover" 
                />
                
                {/* Year badge */}
                <div 
                  className="absolute top-3 right-3 px-2 py-1 text-xs font-bold rounded text-white"
                  style={{ backgroundColor: getColorForYear(image.year) }}
                >
                  {image.year}
                </div>
                
                {/* Caption on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3 transform translate-y-full hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Custom style for hiding scrollbar */}
        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        
        {/* Fullscreen image modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-4xl max-h-90vh p-4"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.caption} 
                className="max-w-full max-h-[80vh] object-contain rounded-lg" 
              />
              
              <div className="absolute bottom-8 left-0 right-0 bg-black bg-opacity-70 text-white p-4 mx-4 rounded">
                <p className="text-lg font-medium text-center">{selectedImage.caption}</p>
              </div>
              
              <button 
                onClick={() => setSelectedImage(null)} 
                className="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MemoriesGallery;
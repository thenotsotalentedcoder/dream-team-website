import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TeamGrid from './components/TeamGrid';
import MemoriesGallery from './components/MemoriesGallery';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Add smooth scrolling for all anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Add scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    const revealHandler = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 150;
      
      revealElements.forEach(element => {
        const revealTop = element.getBoundingClientRect().top;
        
        if (revealTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealHandler);
    
    // Initial check
    revealHandler();
    
    return () => {
      window.removeEventListener('scroll', revealHandler);
    };
  }, []);

  return (
    <div className="App">
      <Hero />
      <About />
      <TeamGrid />
      <MemoriesGallery />
      <Footer />
    </div>
  );
}

export default App;
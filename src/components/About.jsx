import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import teamImage from "../assets/team/PFP_Proff.jpg";
import teamImage2 from "../assets/team/abt.jpg";


const About = () => {
  // Animation settings
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Staggered animation for text blocks
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7 }
    }
  };

  // Image URLs for About section
  const aboutImages = [
    teamImage2,
    teamImage // Using the same image for both places temporarily for testing
  ];  

  return (
    <section id="about" ref={ref} className="py-20 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
            style={{ color: '#1a2639' }}
          >
            Our Story
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <motion.div 
              variants={itemVariants}
              className="text-lg text-navy leading-relaxed"
            >
              <p className="mb-6">
                We are Malik, Saad, Ali, Ateeq, Minhaj, Nusaib, and Hamza – seven friends whose story began at BVS Parsi High School in Karachi, Pakistan. From 2010 to 2021, we navigated eleven years of education together, though often in different sections until Grade 9.
              </p>
              <p className="mb-6">
                The inaugural BVS Science Olympiad became the catalyst for our deeper connection. While most of us chose the science stream, Ali carved his own path in commerce. Despite our different academic focuses, we formed bonds through shared challenges of O Level examinations and collaborative projects.
              </p>
              <p>
                As high achievers collecting A*s and top positions, we didn't just support each other academically – we built a foundation of friendship that would prove resilient through our next chapter.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="rounded-lg overflow-hidden shadow-xl h-80 md:h-auto"
            >
              <img 
                src={aboutImages[0]} 
                alt="Friends in high school" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 md:flex-row-reverse">
            <motion.div 
              variants={itemVariants}
              className="text-lg text-navy leading-relaxed md:order-2"
            >
              <p className="mb-6">
                Cedar College PECHS campus (2021-2023) is where we truly became the "Dream Team." The longer breaks between classes turned into explorations across Karachi and deep conversations that solidified our friendship beyond academics.
              </p>
              <p className="mb-6">
                Our diverse academic pursuits continued – Nusaib and Ali in commerce, others in sciences with varying specializations. Saad focused on biology, Ateeq challenged himself with Further Mathematics, while Malik, Hamza, and Minhaj shared identical schedules in computer science and mathematics.
              </p>
              <p>
                We dominated science competitions across the board – Scinnova, Epsilon, Sceptre Sonic, Cosmos, and Hypercube. Ali's successful campaign for Student Council President (with Saad in the cabinet) and Nusaib's leadership of the Mind Sports Society rounded out our collective achievements before graduation scattered us globally.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="rounded-lg overflow-hidden shadow-xl h-80 md:h-auto md:order-1"
            >
              <img 
                src={aboutImages[1]} 
                alt="Friends at college" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="text-lg text-navy leading-relaxed text-center max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
            style={{ borderLeft: '4px solid #4ecdc4' }}
          >
            <p className="italic text-xl mb-4 text-coral font-medium">
                "From BVS classrooms to international universities, our journey has never really been about distance."
            </p>
            <p>
                Now we span three continents and diverse fields - engineering, computer science, healthcare, finance, and humanities. Though our academic and career paths have diverged, the Dream Team's connection transcends geography. Our group chat remains active daily, and we make it a point to reunite whenever possible, keeping our unique bond alive despite the miles between us.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
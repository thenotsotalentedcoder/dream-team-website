// Modification to TeamGrid.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TeamMemberModal from './TeamMemberModal';

// Import team member images
import aliImage from '../assets/team/ali.jpg';
import minhajImage from '../assets/team/minhaj.jpg';
import hamzaImage from '../assets/team/hamza.jpg';
import ateeqImage from '../assets/team/ateeq.jpg';
import nusaibImage from '../assets/team/nusaib.jpg';
import saadImage from '../assets/team/saad.jpg';
import malikImage from '../assets/team/malik.jpg';

const TeamGrid = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Team members data - keep the original order
  const teamMembers = [
    {
      id: 1,
      name: "Ali",
      university: "Hong Kong University (HKU)",
      program: "Double Major: Computer Science & Humanities",
      quote: "Leadership isn't about titles, it's about impact.",
      image: aliImage,
      bio: "The versatile leader of our group who found his niche at the intersection of technology and humanities. During our school days, Ali chose the commerce stream, yet his diverse interests allowed him to excel across disciplines. His successful campaign for Student Council President showcased his natural leadership abilities and brought our group into the spotlight.",
      interests: ["English Literature", "Public Speaking", "UI/UX Design"],
      funFact: "Successfully led the student council election campaign and won the presidency.",
      socialLinks: {
        instagram: "https://www.instagram.com/__ali.mansoor/",
        twitter: "https://twitter.com/ali",
        linkedin: "https://www.linkedin.com/in/syed-ali-mansoor/"
      }
    },
    {
      id: 2,
      name: "Minhaj",
      university: "Algoma University",
      program: "Computer Science",
      quote: "Always ready for the next adventure, digital or physical.",
      image: minhajImage,
      bio: "Our tech enthusiast who's never afraid to push boundaries. Minhaj crossed borders to pursue his passion for Computer Science in Canada. His combination of coding skills and adventurous spirit made him an essential part of the Dream Team during our competitive days, where his innovative approaches often gave us the edge in science olympiads.",
      interests: ["Coding", "Travelling", "Anything Crazy"],
      funFact: "Helped organize and run the Scinnova competition during college.",
      socialLinks: {
        instagram: "https://www.instagram.com/the_miniman_2123/",
        twitter: "https://twitter.com/minhaj",
        linkedin: "https://www.linkedin.com/in/muhammad-minhajuddin76/"
      }
    },
    {
      id: 3,
      name: "Hamza",
      university: "University of Delaware",
      program: "Chemical Engineering",
      quote: "Chemistry is just another language for understanding the world.",
      image: hamzaImage,
      bio: "The first of our group to venture internationally, Hamza's passion for chemical engineering took him to the University of Delaware. His analytical mind and attention to detail balanced our team dynamics during school competitions. Behind his scientific exterior lies a deep appreciation for anime culture and gaming.",
      interests: ["Chemistry", "Anime & Manga", "Console Gaming"],
      funFact: "Has an impressive collection of manga that he's been building since high school.",
      socialLinks: {
        instagram: "https://www.instagram.com/hamzamalam04/",
        twitter: "https://twitter.com/hamza",
        linkedin: "https://www.linkedin.com/in/hmalam/"
      }
    },
    {
      id: 4,
      name: "Ateeq",
      university: "NUST (H-12 Campus)",
      program: "Aerospace Engineering",
      quote: "The laws of physics are the poetry of reality.",
      image: ateeqImage,
      bio: "Our theoretical physicist at heart who took on the challenge of Further Mathematics while most shied away from it. Ateeq's move to NUST Islamabad for Aerospace Engineering perfectly aligns with his love for understanding how the universe works. His ability to simplify complex concepts made him invaluable during our olympiad competitions.",
      interests: ["Physics", "Mathematics", "Reddit Scrolling"],
      funFact: "One of the few who took on the challenge of Further Mathematics during A Levels.",
      socialLinks: {
        instagram: "https://www.instagram.com/teeq.ur.rehman/",
        twitter: "https://twitter.com/ateeq",
        linkedin: "https://www.instagram.com/teeq.ur.rehman/"
      }
    },
    {
      id: 5,
      name: "Nusaib",
      university: "Professional Path",
      program: "Actuarial Trainee at State Life Karachi",
      quote: "Numbers tell stories that words sometimes can't express.",
      image: nusaibImage,
      bio: "The strategist who chose professional experience over traditional university education. Nusaib's leadership of the Mind Sports Society showcased his analytical thinking and strategic planning. Now pursuing accounting certifications while working as an actuarial trainee, he balances professional growth with his passion for cricket and public speaking.",
      interests: ["Public Speaking", "Accounting", "Cricket", "Debating"],
      funFact: "Led the Mind Sports Society during college, organizing strategic gaming competitions.",
      socialLinks: {
        instagram: "https://www.instagram.com/nusaibabdullah/",
        twitter: "https://twitter.com/nusaib",
        linkedin: "https://www.instagram.com/nusaibabdullah/"
      }
    },
    {
      id: 6,
      name: "Saad",
      university: "Aga Khan University (AKU)",
      program: "Faculty of Arts and Sciences",
      quote: "Through my lens, I capture the stories that connect us all.",
      image: saadImage,
      bio: "The environmentally conscious member with an eye for capturing moments through photography. Saad's choice to study at AKU's Faculty of Arts and Sciences reflects his holistic approach to education. As a member of the Student Council cabinet, he helped implement initiatives that brought positive changes to campus life.",
      interests: ["Cricket", "Photography", "Environmental Conservation", "Aeroplanes"],
      funFact: "Served in the Student Council cabinet alongside Ali during college.",
      socialLinks: {
        instagram: "https://www.instagram.com/saad._.izz/",
        twitter: "https://twitter.com/saad",
        linkedin: "https://www.linkedin.com/in/saad-waheed-8905b6271/"
      }
    },
    {
      id: 7,
      name: "Malik",
      university: "NED University of Engineering and Technology",
      program: "Computer Science",
      quote: "Where technology meets creativity, that's where I thrive.",
      image: malikImage,
      bio: "The AI enthusiast and coding wizard who stayed local but thinks global. Malik's passion for computer science, particularly artificial intelligence, drives his academic pursuits at NED University. When not immersed in code, he's either cheering for Barcelona, enjoying culinary adventures, or capturing the perfect sky photograph.",
      interests: ["AI Coding", "Football (Barcelona)", "Sky/Cloud Photography", "Fast Foods"],
      funFact: "Has an impressive portfolio of cloud formations photographed from unique perspectives.",
      socialLinks: {
        instagram: "https://www.instagram.com/malik_muzammil_09/",
        twitter: "https://twitter.com/malik",
        linkedin: "https://www.linkedin.com/in/malik-muzammil-arman-b296102ba/"
      }
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Create first two rows with 6 members
  const firstSixMembers = teamMembers.slice(0, 6);
  
  // Get Malik (the 7th member)
  const malik = teamMembers[6];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          style={{ color: '#1a2639' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Meet The Dream Team
        </motion.h2>
        
        {/* Grid for first 6 members - 2 rows of 3 cards */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {firstSixMembers.map((member) => (
            <motion.div 
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105 cursor-pointer"
              style={{ 
                width: "300px", 
                height: "400px", 
                display: "flex", 
                flexDirection: "column" 
              }}
              variants={cardVariants}
              onClick={() => setSelectedMember(member)}
            >
              {/* Card content - same as before */}
              <div className="h-64 bg-gray-200 relative overflow-hidden flex-shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-300 transform hover:scale-110" 
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <p className="text-white text-center italic font-light">
                    "{member.quote}"
                  </p>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-1" style={{ color: '#1a2639' }}>
                  {member.name}
                </h3>
                <p className="text-sm font-medium" style={{ color: '#4ecdc4' }}>
                  {member.university}
                </p>
                <p className="text-xs mt-1 text-gray-600 line-clamp-2">
                  {member.program}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Special row for Malik with center positioning */}
        <motion.div
          className="flex justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            key={malik.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105 cursor-pointer"
            style={{ 
              width: "300px", 
              height: "400px", 
              display: "flex", 
              flexDirection: "column" 
            }}
            variants={cardVariants}
            onClick={() => setSelectedMember(malik)}
          >
            {/* Malik's card content */}
            <div className="h-64 bg-gray-200 relative overflow-hidden flex-shrink-0">
              <img 
                src={malik.image} 
                alt={malik.name} 
                className="w-full h-full object-cover object-top transition-transform duration-300 transform hover:scale-110" 
              />
              
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <p className="text-white text-center italic font-light">
                  "{malik.quote}"
                </p>
              </div>
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-1" style={{ color: '#1a2639' }}>
                {malik.name}
              </h3>
              <p className="text-sm font-medium" style={{ color: '#4ecdc4' }}>
                {malik.university}
              </p>
              <p className="text-xs mt-1 text-gray-600 line-clamp-2">
                {malik.program}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <TeamMemberModal 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />
      )}
    </section>
  );
};

export default TeamGrid;
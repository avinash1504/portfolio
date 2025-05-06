import React, { useState, useEffect } from 'react';
import { Home, Code, BookOpen, Award, Briefcase, FileText, MessageSquare, ArrowRight } from 'lucide-react';

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [showSkills, setShowSkills] = useState(false);

  // Function to handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollY = window.scrollY;
        
        if (scrollY >= sectionTop - 200 && scrollY < sectionTop + sectionHeight - 200) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans pb-20">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 py-8 md:py-10 md:px-10">
          <div className="w-full">
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Avinash Bhavancheekar</span>
            </h1>
          </div>
        </header>

        {/* Main Content with Section IDs */}
        <main className="container mx-auto px-6 md:px-10 py-8 md:py-16">
          <section id="about" className="scroll-mt-24 mb-24">
            <AboutSection showSkills={showSkills} setShowSkills={setShowSkills} />
          </section>
          <section id="experience" className="scroll-ml-6 mb-24">
            <ExperienceSection />
          </section>
          <section id="education" className="scroll-ml-6 mb-24">
            <EducationSection />
          </section>
          <section id="projects" className="scroll-ml-6 mb-24">
            <ProjectsSection />
          </section>
          <section id="skills" className="scroll-ml-6 mb-24">
            <SkillsSection />
          </section>
          <section id="contact" className="scroll-ml-6 mb-24">
            <ContactSection />
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 py-8 px-6 md:px-10">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 Avinash Bhavancheekar. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/avinash-bhavancheekar/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500">
                LinkedIn
              </a>
              <a href="https://github.com/avinash1504" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500">
                GitHub
              </a>
              <a href="mailto:avinashbhavancheekar29@gmail.com" className="text-gray-400 hover:text-indigo-500">
                Email
              </a>
            </div>
          </div>
        </footer>

        {/* Improved Floating Navigation Bar */}
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-900 border border-gray-800 rounded-full px-4 py-2 shadow-md z-50">
          <FloatingNavLinks activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>
      </div>
    </div>
  );
};

// Updated Floating Navigation Links Component - More compact spacing
const FloatingNavLinks = ({ activeSection, setActiveSection }) => {
  const links = [
    { id: 'about', icon: <Home size={24} /> },
    { id: 'experience', icon: <Briefcase size={24} /> },
    { id: 'education', icon: <BookOpen size={24} /> },
    { id: 'projects', icon: <Code size={24} /> },
    { id: 'skills', icon: <Award size={24} /> },
    { id: 'contact', icon: <MessageSquare size={24} /> },
    { id: 'resume', icon: <FileText size={24} />, isExternal: true, link: "https://drive.google.com/file/d/1bJJK0c-LXdYsdxQh9x_v20w5ldbqKPnR/view?usp=sharing" }
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex items-center gap-4">
      {links.map((link) =>
        link.isExternal ? (
          <a
            key={link.id}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <div className="p-2 rounded-full hover:bg-gray-800">{link.icon}</div>
          </a>
        ) : (
          <button
            key={link.id}
            onClick={(e) => scrollToSection(e, link.id)}
            className="text-gray-400 hover:text-white transition"
          >
            <div
              className={`p-2 rounded-full ${
                activeSection === link.id
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-800'
              }`}
            >
              {link.icon}
            </div>
          </button>
        )
      )}
    </div>
  );
};


// Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-gray-900 to-black opacity-70"></div>
      
      {/* Animated Gradient Element */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Code-inspired background elements - Using a CSS approach instead */}
      <div className="absolute inset-0 opacity-5">
        <div className="code-pattern h-full w-full"></div>
      </div>
    </div>
  );
};

// Contact Section Component

// About Section Component with Fixed Hover Animations
const AboutSection = ({ showSkills, setShowSkills }) => {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row items-center">
      <div className="md:w-2/3">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Avinash Bhavancheekar</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">Software Engineer & Full-Stack Developer</h2>
        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
          Specializing in building scalable applications with cutting-edge technologies. 
          My expertise spans across front-end and back-end development, with a focus on 
          creating intuitive, high-performance solutions that solve real-world problems.
          Based in the New York Metropolitan Area.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://www.linkedin.com/in/avinash-bhavancheekar/" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition-all">
            Connect on LinkedIn
          </a>
          <a href="https://github.com/avinash1504" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md font-medium transition-all">
            View GitHub
          </a>
        </div>
      </div>
      
      <div className="md:w-1/3 flex justify-center mt-12 md:mt-0">
        <div 
          className="w-64 h-64 relative cursor-pointer"
          onMouseEnter={() => setShowSkills(true)}
          onMouseLeave={() => setShowSkills(false)}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 animate-pulse"></div>
          <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center">
            <Code size={64} className="text-indigo-400" />
          </div>
          
          {/* Fixed Skill Icons that appear on hover - with smooth animations */}
          {showSkills && (
            <div className="absolute -inset-20">
              <div className="w-full h-full relative">
                {/* Java */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 p-3 rounded-full shadow-lg animate-float">
                  <svg viewBox="0 0 128 128" className="w-8 h-8">
                    <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"></path><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"></path><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"></path><path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"></path><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"></path>
                  </svg>
                </div>
                
                {/* React */}
                <div className="absolute top-1/4 right-0 bg-gray-800 p-3 rounded-full shadow-lg animate-float2">
                  <svg viewBox="0 0 128 128" className="w-8 h-8">
                    <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21.2c-1.1-2-2.2-4.1-3.4-6.1-1.2-2.1-2.4-4.2-3.6-6.1 3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7.7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7.7 69.6 7.7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM100.4 70c.6 2.3 1.1 4.5 1.4 6.6 1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5zm9.9-20.4c2 .8 4.2 1.5 6.4 2.1 10 3.7 15.7 8.7 15.7 13.4 0 5.6-7.7 11.6-20.7 15.7-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.7z"></path></g>
                  </svg>
                </div>
                
                {/* Node.js */}
                <div className="absolute bottom-1/4 right-0 bg-gray-800 p-3 rounded-full shadow-lg animate-float3">
                  <svg viewBox="0 0 128 128" className="w-8 h-8">
                    <path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
                  </svg>
                </div>
                
                {/* Python */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 p-3 rounded-full shadow-lg animate-float4">
                  <svg viewBox="0 0 128 128" className="w-8 h-8">
                    <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4"></stop><stop offset="1" stopColor="#306998"></stop></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B"></stop><stop offset="1" stopColor="#FFE873"></stop></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"></path><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"></path><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"></stop><stop offset="1" stopColor="#7F7F7F" stopOpacity="0"></stop></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
                  </svg>
                </div>
                
                {/* AWS */}
                <div className="absolute top-1/4 left-0 bg-gray-800 p-3 rounded-full shadow-lg animate-pulse">
                  <svg viewBox="0 0 128 128" className="w-8 h-8">
                    <path fill="#F7A80D" d="M38.089 77.466l-11.4 4.896 10.559 4.514 12.241-4.514-11.4-4.896zm-17.138 6.12l-.382 22.034 16.679 7.345V90.089l-16.297-6.503zm34.276 0l-15.073 5.739V110.9l15.073-6.121V83.586zm17.979-68.551L61.73 19.931l10.635 4.515 12.241-4.515-11.4-4.896zm-15.914 6.503v22.034l14.231 4.132.459-20.046-14.69-6.12zm31.828 1.224L75.654 28.5V47.02l13.466-5.738V22.762z"></path><path fill="#F7A80D" d="M28.034 83.651l-7.489-2.201 1.62-5.224 7.412 2.809-.382 4.107 7.951 3.521V73.494l-7.951-3.13v3.904l-1.077-1.391-7.188-3.294 15.608-6.245 15.837 6.962-14.231 6.946-10.442-4.259v1.642l9.346 3.904 5.582-2.577 1.078 3.13-6.66 3.294v9.68l7.874-4.363.535-9.832 7.489-3.294.153 15.302-15.532 9.832-15.608-7.412zm5.506-18.515l-6.107-2.277h-.076l6.183 3.316v-1.039zm22.25.535l6.107 2.201v-2.117l-6.107-2.809v2.725z"></path>
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "UGenome AI",
      location: "Remote",
      period: "April 2025 - Present",
      description: [
        "Led full-stack development for UGenome's MVP, building scalable components with React, Node.js, Python, and FastAPI that accelerated product readiness by 30% and supported secure data integration for personalized user insights",
        "Designed and optimized MySQL and MongoDB databases while implementing conditional onboarding flows that streamlined data submission and enhanced retrieval speed for complex genomic information",
        "Replaced legacy third-party APIs with custom service integrations and RESTful endpoints that transformed genomic research into functional tools through cross-functional collaboration",
        "Built and tested services to process, transform, and store complex JSON data, maintaining seamless frontend-backend communication for end-to-end functionality",
        "Conducted rigorous debugging, unit testing, and performance optimization, reducing critical bugs by 40% while maintaining high code quality through peer reviews and technical documentation"
      ]
    },
    {
      title: "Graduate Intern",
      company: "PACE UNIVERSITY",
      location: "New York City, New York",
      period: "August 2023 - December 2024",
      description: [
        "Enhanced user engagement and interface accessibility by optimizing front-end experiences across internal organizational tools using UI/UX improvements, accessibility standards (WCAG/ARIA), and performance optimization strategies, resulting in a 20% increase in task efficiency and faster navigation",
        "Ensured reliability during peak usage periods by conducting manual regression testing, stress testing, and cross-browser compatibility checks; upgraded error resolution speed by 30% through prompt documentation and issue tracking",
        "Demonstrated proficiency in Microsoft Suite to automate routine tasks, reducing manual effort and increasing team productivity by 15%"
      ]
    },
    {
      title: "Trust and Safety New Associate",
      company: "ACCENTURE",
      location: "Hyderabad, Telangana",
      period: "November 2021 - November 2022",
      description: [
        "Improved fraud detection accuracy by 25% through real-time monitoring dashboards and data analytics using Google AdWords and internal tools, maintaining a consistent 98% quality assurance rating",
        "Developed and implemented a structured training program for new associates, resulting in a 20% reduction in onboarding time; mentored 20+ employees on infrastructure and workflows across 10+ projects, ensuring operational consistency",
        "Identified and mitigated compliance risks by leveraging mechanize flagging systems and data validation scripts to monitor accounts and enforce policy adherence"
      ]
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-12 relative">
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Professional Experience</span>
        <span className="block w-20 h-1 bg-indigo-600 mt-4"></span>
      </h2>
      
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-indigo-600">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-indigo-500 transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <span className="text-indigo-400 font-medium mt-2 md:mt-0">{exp.period}</span>
              </div>
              
              <div className="flex flex-col md:flex-row md:justify-between mb-6">
                <div className="flex items-center text-gray-300">
                  <Briefcase size={16} className="mr-2" />
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center text-gray-300 mt-2 md:mt-0">
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex">
                    <span className="mr-3 text-indigo-400">•</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science (MS) in Computer Science",
      concentration: "Concentration: Software Development",
      institution: "Pace University, Seidenberg School of Computer Science and Information Systems",
      location: "New York, New York",
      period: "January 2023 - December 2024",
      gpa: "GPA: 3.86/4",
      courses: "Relevant Coursework: Application Development, Java Programming, DSA, DBMS, Software Testing, Python"
    },
    {
      degree: "Bachelor of Technology (BTech) in Electronics and Communication Engineering",
      institution: "K.S.R.M. College of Engineering",
      location: "Andhra Pradesh, India",
      period: "July 2017 - May 2021",
      gpa: "GPA: 7.02/10"
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-12 relative">
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Education</span>
        <span className="block w-20 h-1 bg-indigo-600 mt-4"></span>
      </h2>
      
      <div className="space-y-12">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-indigo-500 transition-all">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                {edu.concentration && (
                  <p className="text-indigo-400 mt-1">{edu.concentration}</p>
                )}
              </div>
              <span className="text-indigo-400 font-medium mt-2 md:mt-0">{edu.period}</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:justify-between mb-4">
              <div className="flex items-center text-gray-300">
                <BookOpen size={16} className="mr-2" />
                <span>{edu.institution}</span>
              </div>
              <div className="flex items-center text-gray-300 mt-2 md:mt-0">
                <span>{edu.location}</span>
              </div>
            </div>
            
            <div className="text-gray-300">{edu.gpa}</div>
            {edu.courses && (
              <div className="mt-4 text-gray-300">{edu.courses}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "EzCars Web Application",
      period: "September 2024 - December 2024",
      description: "A full-stack car rental platform with integrated payment processing and insurance verification.",
      details: [
        "Conceptualized responsive front-end using ReactJS, HTML, and CSS for Windows, macOS, Android, and iOS",
        "Designed and implemented RESTful APIs with Spring Boot and Java for user registration and vehicle bookings",
        "Integrated Stripe for payment processing, AWS for hosting and deployment, and insurance APIs for real-time verification",
        "Executed both manual and automated testing using Selenium and Cypress, validating functionality under peak loads"
      ],
      technologies: ["React", "Spring Boot", "Java", "AWS", "Stripe API", "Selenium", "Cypress"],
      github: "https://github.com/avinash1504/EZCars" 
    },
    {
      title: "Student Wellbeing Fitness Android Application",
      period: "March 2024 - May 2024",
      description: "A mobile application focused on student health and fitness tracking with personalized workout plans.",
      details: [
        "Initiated an engaging Android app using Java and Kotlin, following Agile methodologies for sprint-based development",
        "Leveraged Firebase Database to securely manage user data, including workout progress and login credentials",
        "Performed testing using Logcat, resolving all identified bugs to ensure error-free and smooth application functionality"
      ],
      technologies: ["Java", "Kotlin", "Firebase", "Android Studio", "Agile"],
      github: "https://github.com/CS639-Team1-FinalProject/PacePowerPulse"
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-12 relative">
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
        <span className="block w-20 h-1 bg-indigo-600 mt-4"></span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-indigo-500 transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <span className="text-indigo-400 text-sm">{project.period}</span>
            </div>
            
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
              <ul className="space-y-2">
                {project.details.map((detail, i) => (
                  <li key={i} className="flex">
                    <span className="mr-3 text-indigo-400">•</span>
                    <span className="text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-700 text-indigo-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium transition-all"
            >
              View Project <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming & Scripting",
      skills: ["Java", "Kotlin", "JavaScript", "SQL", "Spring Boot", "Python", "HTML", "CSS"]
    },
    {
      category: "Backend & Cloud",
      skills: ["RESTful APIs", "Microservices", "API Management", "AWS", "Docker", "Node.js", "FastAPI"]
    },
    {
      category: "Web Development",
      skills: ["ReactJS", "HTML", "CSS", "PHP", "WCAG/ARIA Standards"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "Firebase", "MongoDB", "Database Optimization"]
    },
    {
      category: "CI/CD & Tools",
      skills: ["Jenkins", "GitHub Actions", "Jira", "Git", "Microsoft Suite"]
    },
    {
      category: "Testing & QA",
      skills: ["Cypress", "Selenium", "JUnit", "Postman", "RestAssured", "BDD", "Performance Testing"]
    },
    {
      category: "Methodologies",
      skills: ["Agile", "Scrum", "Test-Driven Development"]
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-12 relative">
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Technical Skills</span>
        <span className="block w-20 h-1 bg-indigo-600 mt-4"></span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-indigo-500 transition-all">
            <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span key={i} className="bg-gray-700 text-indigo-300 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const ContactSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-12 relative">
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Contact Me</span>
        <span className="block w-20 h-1 bg-indigo-600 mt-4"></span>
      </h2>
      
      <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700">
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              required
            />
          </div>
          
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              required
            />
          </div>
          
          <div>
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              required
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-all flex items-center"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
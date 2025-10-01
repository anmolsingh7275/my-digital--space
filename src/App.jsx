import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Download, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  
  // IMPORTANT: Replace these with your actual links
  const personalInfo = {
    name: "Anmol Singh",
    title: "Full Stack Developer",
    email: "anmol.singh@email.com",
    location: "767 Fifth Avenue, New York, NY 10153",
    profileImage: "/profile.jpg.png", // Put your image in public folder as profile.jpg
    resumeUrl: "/Resume_on", // Put your resume in public folder as resume.pdf
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://www.linkedin.com/in/yourusername",
      instagram: "https://www.instagram.com/yourusername",
      email: "mailto:anmol.singh@email.com"
    }
  };

  const technologies = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Next.js', icon: '▲', color: '#000000' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'Redis', icon: '◆', color: '#DC382D' },
    { name: 'Node.js', icon: '⬢', color: '#339933' },
    { name: 'PostgreSQL', icon: '🐘', color: '#4169E1' }
  ];

  const experiences = [
    {
      period: '2023 - Present',
      role: 'Senior Full Stack Developer',
      company: 'Google Inc.',
      description: 'Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.',
      skills: ['Javascript', 'React.js', 'Next.js', 'mongoDB']
    },
    {
      period: '2022 - 2023',
      role: 'Frontend Developer',
      company: 'Adobe',
      description: 'Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.',
      skills: ['HTML', 'CSS', 'Vue.js', 'mySQL']
    },
    {
      period: '2021 - 2022',
      role: 'Full Stack Developer',
      company: 'Facebook',
      description: 'Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.',
      skills: ['Python', 'Svelte', 'Three.js', 'Postgres']
    },
    {
      period: '2020 - 2021',
      role: 'Software Engineer',
      company: 'Paypal',
      description: 'Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.',
      skills: ['Ruby', 'Rails', 'PHP', 'Sqlite']
    }
  ];

  // IMPORTANT: Replace these URLs with your actual project GitHub links
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.',
      image: '🛒',
      color: 'from-cyan-400 to-blue-500',
      skills: ['HTML', 'CSS', 'React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/yourusername/ecommerce-project',
      liveUrl: 'https://yourproject.com' // Optional
    },
    {
      title: 'Task Management App',
      description: 'An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.',
      image: '✓',
      color: 'from-pink-400 to-red-500',
      skills: ['HTML', 'CSS', 'Angular', 'Firebase'],
      githubUrl: 'https://github.com/yourusername/task-management',
      liveUrl: 'https://yourproject.com' // Optional
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects, skills, and contact information.',
      image: '💼',
      color: 'from-purple-400 to-pink-500',
      skills: ['HTML', 'CSS', 'React', 'Bootstrap'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://yourproject.com' // Optional
    }
  ];

  // Handle resume download
  const handleDownloadResume = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Ravi_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Rk
          </motion.div>
          <div className="flex gap-6">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Projects', id: 'projects' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.1, color: '#60A5FA' }}
                className="cursor-pointer transition-colors bg-transparent border-none text-white"
              >
                {item.name}
              </motion.button>
            ))}
          </div>
          <div className="flex gap-4">
            <motion.a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="cursor-pointer"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="cursor-pointer"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={personalInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="cursor-pointer"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              href={personalInfo.social.email}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="cursor-pointer"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {personalInfo.name}
            </motion.h1>
            <motion.p 
              className="text-2xl text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {personalInfo.title}
            </motion.p>
            <motion.p 
              className="text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
            </motion.p>
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white text-black px-8 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <motion.div 
              className="w-96 h-96 rounded-full overflow-hidden relative"
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(96, 165, 250, 0.3)',
                  '0 0 60px rgba(96, 165, 250, 0.5)',
                  '0 0 20px rgba(96, 165, 250, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Replace this with your actual image */}
              <img 
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-end justify-center"><div class="text-9xl pb-8">👨‍💻</div></div>';
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          Technologies
        </motion.h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-lg cursor-pointer"
            >
              <div className="text-6xl mb-2">{tech.icon}</div>
              <div className="text-sm text-gray-400">{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-950">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          Projects
        </motion.h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-8xl`}>
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <Github size={18} />
                    Source Code
                  </motion.a>
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="about" className="py-20 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-900 rounded-lg p-8"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-400 mb-2">{exp.period}</p>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-950">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl text-gray-400 mb-8">
            {personalInfo.location}
          </p>
          <div className="flex justify-center gap-6">
            <motion.a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-gray-900 rounded-full cursor-pointer hover:bg-gray-800"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-gray-900 rounded-full cursor-pointer hover:bg-gray-800"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href={personalInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-gray-900 rounded-full cursor-pointer hover:bg-gray-800"
            >
              <Instagram size={24} />
            </motion.a>
            <motion.a
              href={personalInfo.social.email}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-gray-900 rounded-full cursor-pointer hover:bg-gray-800"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center text-gray-400">
        <p>© 2025 {personalInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
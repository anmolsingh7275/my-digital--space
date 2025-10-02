import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Download, ExternalLink } from 'lucide-react';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import emailjs from "@emailjs/browser";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();

  // Personal Info
  const personalInfo = {
    name: "Anmol Singh",
    title: "Full Stack Developer",
    email: "anmolsinghchauhan.200@gmail.com",
    location: "KIET Group of Institutions, Muradnagar, Ghaziabad",
    profileImage: "/profile.jpg.png",
    resumeUrl: "/Resume_on",
    social: {
      github: "https://github.com/anmolsingh7275",
      linkedin: "https://www.linkedin.com/in/anmol-singh-09a301378/",
      instagram: "https://www.instagram.com/_anmolsinghchauhan_?igsh=MWR0NHgyc3ZtbXM1Yw==",
      email: "anmolsinghchauhan.200@gmail.com",
      leetcode: "https://leetcode.com/u/_anmolsingh_/",
      gfg: "https://www.geeksforgeeks.org/user/anmolprogqac3/"
    }
  };

  // Technologies
  const technologies = [
    { name: 'React.js', icon: '⚛️', color: '#61DAFB' },
    { name: 'Next.js', icon: '▲', color: '#000000' },
    { name: 'HTML5', icon: '🟧', color: '#E34F26' },
    { name: 'CSS3', icon: '🎨', color: '#1572B6' },
    { name: 'Tailwind CSS', icon: '💨', color: '#38B2AC' },
    { name: 'Bootstrap', icon: '🟪', color: '#7952B3' },
    { name: 'JavaScript (ES6+)', icon: '🟨', color: '#F7DF1E' },
    { name: 'TypeScript', icon: '🔵', color: '#3178C6' },
    { name: 'Node.js', icon: '⬢', color: '#339933' },
    { name: 'Express.js', icon: '🚏', color: '#000000' },
    { name: 'REST APIs', icon: '🌐', color: '#00599C' },
    { name: 'Authentication (JWT, OAuth)', icon: '🔑', color: '#FF6F00' },
    { name: 'Socket.IO', icon: '📡', color: '#010101' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'MySQL', icon: '🐬', color: '#4479A1' },
    { name: 'Git', icon: '🔧', color: '#F05032' },
    { name: 'GitHub', icon: '🐱', color: '#181717' },
    { name: 'Data Structures & Algorithms', icon: '📘', color: '#2E7D32' },
    { name: 'Redux / Context API', icon: '🌀', color: '#764ABC' },
    { name: 'Postman', icon: '📮', color: '#FF6C37' }
  ];

  // Experiences
  const experiences = [
    {
      period: '2025 - Present',
      role: 'Mentor - Web Development',
      company: 'Cbpyte KIET',
      description: 'Mentored over 100 students in web development, guiding them through projects, best practices, and modern technologies like React.js, Node.js, and MongoDB. Provided hands-on training and career guidance.',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Web Development', 'Mentoring']
    },
    {
      period: 'June 2024 - August 2024',
      role: 'Web Development Intern',
      company: 'Prosenix',
      description: 'Worked as a web development intern for 3 months, contributing to frontend and backend development tasks using React.js, Node.js, and Express.js. Assisted in building scalable web applications and learning agile development practices.',
      skills: ['React.js', 'Node.js', 'Express.js', 'Web Development', 'Internship']
    }
  ];

  // Projects
  const projects = [
    {
      title: 'Alumni Management System',
      description: '🌟 A dynamic platform that brings alumni and students together—connect, collaborate, join events, and make contributions effortlessly.',
      image: '🎓',
      color: 'from-purple-400 to-indigo-500',
      skills: ['React.js','Tailwind CSS','Node.js','Express.js','MongoDB (with Mongoose)','Socket.IO','JWT / OAuth','Razorpay'],
      githubUrl: 'https://github.com/anmolsingh7275/Alumini-Management-System',
      liveUrl: 'https://your-live-demo-url.com'
    },
    {
      title: 'Note App',
      description: '📝 A collaborative note-taking app with real-time updates, secure access, and smart note management.',
      image: '🗒️',
      color: 'from-green-400 to-teal-500',
      skills: ['React.js','Tailwind CSS','Node.js','Express.js','MongoDB (with Mongoose)','Socket.IO','JWT / OAuth'],
      githubUrl: 'https://github.com/anmolsingh7275/Note-App',
      liveUrl: 'https://your-live-demo-url.com'
    },
    {
      title: 'Real-Time Code Collaboration Editor',
      description: '💻 A collaborative coding platform with Monaco Editor, allowing multiple users to work on the same project simultaneously.',
      image: '🖥️',
      color: 'from-blue-400 to-indigo-500',
      skills: ['React.js','Node.js','Express.js','Socket.IO','Monaco Editor','MongoDB (optional)'],
      githubUrl: 'https://github.com/yourusername/realtime-code-editor',
      liveUrl: 'https://your-live-demo-url.com'
    }
  ];

  // Resume download
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = 'Anmol_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Smooth scroll
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // EmailJS send function
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_8y5y4ka",   // Replace with your EmailJS service ID
      "template_mr5wceq",  // Replace with your EmailJS template ID
      e.target,
      "jTQ1DCwEU_BJ-AeEb"    // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      alert("Email sent successfully!");
      e.target.reset();
    }, (error) => {
      console.log(error.text);
      alert("Oops! Something went wrong, please try again.");
    });
  };

  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navigation */}
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.1 }} className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection('home')}>Rk</motion.div>
          <div className="flex gap-6">
            {['Home', 'About', 'Projects', 'Contact'].map(name => (
              <motion.button
                key={name}
                onClick={() => scrollToSection(name.toLowerCase())}
                whileHover={{ scale: 1.1, color: '#60A5FA' }}
                className="cursor-pointer transition-colors bg-transparent border-none text-white"
              >
                {name}
              </motion.button>
            ))}
          </div>
          <div className="flex gap-4">
            {[Linkedin, Github, Instagram, Mail].map((Icon, i) => {
              const links = [personalInfo.social.linkedin, personalInfo.social.github, personalInfo.social.instagram, personalInfo.social.email];
              return (
                <motion.a key={i} href={links[i]} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 5 }} className="cursor-pointer">
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1 className="text-7xl font-bold mb-4">{personalInfo.name}</motion.h1>
            <motion.p className="text-2xl text-gray-400 mb-8">{personalInfo.title}</motion.p>
            <motion.p className="text-gray-300 mb-8 leading-relaxed">
              I am a passionate Full Stack Developer with expertise in MERN stack and Next.js...
            </motion.p>
            <motion.button onClick={handleDownloadResume} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-black px-8 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors cursor-pointer">
              <Download size={20}/> Download Resume
            </motion.button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex justify-center">
            <motion.div className="w-96 h-96 rounded-full overflow-hidden relative">
              <img src={personalInfo.profileImage} alt={personalInfo.name} className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6">
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl font-bold text-center mb-16">
          Technologies
        </motion.h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, i) => (
            <motion.div key={tech.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.1, rotate: 5 }} className="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-lg cursor-pointer">
              <div className="text-6xl mb-2">{tech.icon}</div>
              <div className="text-sm text-gray-400">{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-950">
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl font-bold text-center mb-16">Projects</motion.h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} whileHover={{ y: -10 }} className="bg-gray-900 rounded-lg overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-8xl`}>{project.image}</div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map(skill => <span key={skill} className="px-3 py-1 bg-gray-800 rounded-full text-sm">{skill}</span>)}
                </div>
                <div className="flex gap-3">
                  <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                    <Github size={18}/> Source Code
                  </motion.a>
                  {project.liveUrl && <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"><ExternalLink size={18}/> Live Demo</motion.a>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="about" className="py-20 px-6">
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl font-bold text-center mb-16">Experience</motion.h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="bg-gray-900 rounded-lg p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-400 mb-2">{exp.period}</p>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map(skill => <span key={skill} className="px-3 py-1 bg-gray-800 rounded-full text-sm">{skill}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-950">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl text-gray-400 mb-8">{personalInfo.location}</p>
          <div className="flex justify-center gap-6 flex-wrap mb-12">
            {[personalInfo.social.linkedin, personalInfo.social.github, personalInfo.social.instagram, personalInfo.social.email, personalInfo.social.leetcode, personalInfo.social.gfg].map((link, i) => {
              const icons = [Linkedin, Github, Instagram, Mail, SiLeetcode, SiGeeksforgeeks];
              return (
                <motion.a key={i} href={link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} className="p-4 bg-gray-900 rounded-full cursor-pointer hover:bg-gray-800">
                  {React.createElement(icons[i], { size: 24 })}
                </motion.a>
              )
            })}
          </div>

          {/* EmailJS Form */}
          <form onSubmit={sendEmail} className="max-w-xl mx-auto flex flex-col gap-4 bg-gray-900 p-8 rounded-lg">
            <input type="text" name="user_name" placeholder="Your Name" required className="p-3 rounded bg-gray-800 text-white"/>
            <input type="email" name="user_email" placeholder="Your Email" required className="p-3 rounded bg-gray-800 text-white"/>
            <textarea name="message" placeholder="Your Message" rows="6" required className="p-3 rounded bg-gray-800 text-white"/>
            <button type="submit" className="bg-blue-600 py-3 px-6 rounded hover:bg-blue-700 transition-colors">Send Email</button>
          </form>
        </motion.div>
      </section>

    </div>
  );
}
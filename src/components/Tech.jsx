// import { BiLogoPostgresql } from "react-icons/bi"
// import { DiReact, DiRedis } from "react-icons/di"
// import { FaNodeJs } from "react-icons/fa6"
// import { RiReactjsLine } from "react-icons/ri"
// import { SiMongodb } from "react-icons/si"
// import { TbBrandNextjs } from "react-icons/tb"

// export default function Tech(){
//     return(
//         <div className="pb-24">
//             <h2 className="my-20 text-center text-4xl">
//                 Technologies
//             </h2>
//             <div className="flex flex-wrap items-center justify-center gap-4">
//                <div>
//                  <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
//                </div>
//                <div className="p-4">
//                  <TbBrandNextjs className="text-7xl"/>
//                </div>
//                <div className="p-4">
//                   <SiMongodb className="text-7xl text-cyan-500"/>
//                </div>
//                <div className="p-4">
//                    <DiRedis className="text-7xl text-red-700"/>
//                </div>
//                <div className="p-4">
//                   <FaNodeJs className="text-7xl text-green-500"/>
//                </div>
//                <div className="p-4">
//                     <BiLogoPostgresql className="text-7xl text-sky-700"/>
//                </div>
//             </div>
//         </div>
//     )
// }


import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=500&fit=crop",
    technologies: ["HTML", "CSS", "React", "Bootstrap"]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=500&h=500&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: 3,
    title: "Blogging Platform",
    description: "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=500&h=500&fit=crop",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"]
  },
  {
    id: 4,
    title: "E-Commerce Store",
    description: "A full-featured online store with product listings, shopping cart, payment integration, and order management.",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=500&h=500&fit=crop",
    technologies: ["React", "Redux", "Stripe", "Firebase"]
  }
];

const Projects = () => {
  return (
    <motion.div 
      className="pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="my-20 text-center text-4xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <motion.div 
              className="w-full lg:w-1/4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div 
              className="w-full max-w-xl lg:w-3/4"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
            >
              <h3 className="mb-2 font-semibold text-2xl">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-400">
                {project.description}
              </p>
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  whileHover={{ scale: 1.1, backgroundColor: "#1c1917" }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-nowrap">
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2 
              className="pb-2 text-4xl tracking-tighter lg:text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              John Doe
            </motion.h2>
            <motion.span 
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Full Stack Developer
            </motion.span>
            <motion.p 
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With experience in front-end technologies like React and Next.js, and back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB, I strive to create innovative solutions that drive business growth.
            </motion.p>
            <motion.a
              href="#projects"
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
        <motion.div 
          className="w-full lg:w-1/2 lg:p-8"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex justify-center lg:justify-end">
            <motion.img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop"
              alt="Profile"
              className="rounded-3xl"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="pb-4">
      <motion.h2 
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div 
          className="w-full lg:w-1/2 lg:p-8"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center">
            <motion.img
              src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=400&h=400&fit=crop"
              alt="About"
              className="rounded-3xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-lg py-6 text-xl">
              I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Technologies = () => {
  const techs = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Tailwind", icon: "🎨" }
  ];

  return (
    <div className="pb-24">
      <motion.h2 
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Technologies
      </motion.h2>
      <motion.div 
        className="flex flex-wrap items-center justify-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="p-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.2, rotate: 360 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-6xl">{tech.icon}</span>
              <span className="mt-2 text-stone-400">{tech.name}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2 
        className="my-10 text-center text-4xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>
      <motion.div 
        className="text-center tracking-tighter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.p 
          className="my-4"
          whileHover={{ scale: 1.05 }}
        >
          123 Developer Street, Tech City, TC 12345
        </motion.p>
        <motion.p 
          className="my-4"
          whileHover={{ scale: 1.05 }}
        >
          +1 (555) 123-4567
        </motion.p>
        <motion.a
          href="mailto:john.doe@example.com"
          className="border-b"
          whileHover={{ scale: 1.05 }}
        >
          john.doe@example.com
        </motion.a>
      </motion.div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <motion.div 
        className="flex flex-shrink-0 items-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold">JD</h1>
      </motion.div>
      <motion.div 
        className="m-8 flex items-center justify-center gap-4 text-2xl"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#0077b5" }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </motion.a>
        <motion.a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </motion.a>
        <motion.a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#1DA1F2" }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        </motion.a>
      </motion.div>
    </nav>
  );
};

export default function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <div id="projects">
          <Projects />
        </div>
        <Contact />
      </div>
    </div>
  );
}
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLink, FaExternalLinkAlt } from "react-icons/fa";

const projectData = [
  {
    id: 1,
    title: "Loan Link",
    image: "https://i.ibb.co.com/wZFLKCYx/loan-link.jpg",
    image: "https://i.ibb.co.com/W4b97PN5/loanlik1.jpg",
    description:
      "A full-stack loan management platform that allows users to apply for loans, manage applications, and process secure payments with role-based authentication.",
    techStack: ["React", "Express.js", "MongoDB", "Stripe", "JWT"],
    liveLink: "https://loanlink1.netlify.app/",
    githubLink: "https://github.com/Tanvir-programmer/LoanLink",
    category: "Full stack",
  },
  {
    id: 2,
    title: "FreeLio Marketplace",
    image: "https://i.ibb.co.com/s9xPYG5g/Screenshot-2026-02-22-211703.jpg",
    description:
      "A robust freelancer ecosystem featuring complete profile management, job posting, and secure recruitment workflows.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    liveLink: "https://freelio-new.netlify.app/",
    githubLink: "https://github.com/Tanvir-programmer/gamehub",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "GameHub Engine",
    image: "https://i.ibb.co/fVF3zwvH/gamehub.jpg",
    description:
      "Modern gaming platform with dynamic product filtering and high-performance UI architecture tailored for high-traffic assets.",
    techStack: ["React", "Tailwind CSS", "API Integration"],
    liveLink: "https://gamehub-new.netlify.app/",
    githubLink: "https://github.com/Tanvir-programmer/gamehub",
    category: "Frontend",
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group bg-[#111827] border border-gray-800 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500"
  >
    {/* Image Container */}
    <div className="relative h-60 overflow-hidden ">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent"></div>

      {/* Category Badge */}
      <div className="absolute top-4 left-4">
        <span className="bg-black/60 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-primary/30">
          {project.category}
        </span>
      </div>
    </div>

    {/* Content Container */}
    <div className="p-8">
      <h3 className="text-2xl font-black text-white mb-3 italic tracking-tighter group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-[9px] font-bold uppercase py-1 px-2.5 bg-gray-900 text-gray-400 rounded-lg border border-gray-800 group-hover:border-gray-700 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-xl text-xs font-black tracking-widest hover:bg-red-700 hover:shadow-[0_5px_15px_rgba(216,10,37,0.4)] transition-all active:scale-95"
        >
          PREVIEW <FaExternalLinkAlt />
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 border border-gray-800 text-gray-400 rounded-xl hover:bg-gray-800 hover:text-white transition-all"
        >
          <FaGithub size={18} />
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0b1120] py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header - Matches Banner/Skills Style */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-black text-white tracking-tighter mb-4"
          >
            FEATURED <span className="text-primary">PROJECTS</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 font-mono text-xs uppercase tracking-[0.3em]">
            Real-world applications & Technical experiments
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projectData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

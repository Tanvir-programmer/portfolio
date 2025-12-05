import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const projectData = [
  {
    id: 1,
    title: "FreeLio - Freelancer Marketplace Platform",
    image: "https://i.ibb.co/qY42F6VN/freelio.jpg",
    description:
      "A robust platform connecting clients and freelancers, featuring complete profile management, job posting, and job acceptance functionalities.",
    techStack: ["React", "Tailwind CSS", "MongoDB", "Express", "Node.js"],
    liveLink: "https://freelio-new.netlify.app/",
    githubLink: "https://github.com/Tanvir-programmer/gamehub",
  },
  {
    id: 2,
    title: "GameHub - Gaming Platform",
    image: "https://i.ibb.co/fVF3zwvH/gamehub.jpg",
    description:
      "GameHub – a modern gaming platform featuring dynamic product browsing, filtering, and a clean UI tailored for gamers. Strengthened skills in API integration and component architecture.",
    techStack: ["React", "Tailwind CSS"],
    liveLink: "https://gamehub-new.netlify.app/",
    githubLink: "https://github.com/Tanvir-programmer/gamehub",
  },
  {
    id: 3,
    title: "Hero.io - Real-Time Multiplayer Game Clone",
    image: "https://i.ibb.co/23z6czTP/hero-io.jpg",
    description:
      "A fast-paced multiplayer game built using Node.js and Socket.IO, demonstrating real-time communication, full-stack logic, and responsive game mechanics.",
    techStack: ["React", "Tailwind CSS"],
    liveLink: "https://hero-io-new.netlify.app/",
    githubLink: "https://github.com/Tanvir-programmer/Hero-Io",
  },
];

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
    {/* Image */}
    <div className="w-full h-56 sm:h-64 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 text-sm sm:text-base">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium py-1 px-3 bg-blue-100 text-blue-700 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mt-auto">
        <a
          href={project.liveLink}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
        >
          <FaLink /> Live Site
        </a>

        <a
          href={project.githubLink}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-primary text-center mb-12">
        My Web Development Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

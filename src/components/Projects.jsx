import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const projectData = [
  // ... (Paste the projectData array from above here) ...
  {
    id: 1,
    title: "Hero.io - Real-Time Multiplayer Game Clone",
    image: "https://i.ibb.co/23z6czTP/hero-io.jpg",
    description:
      "A fast-paced, real-time multiplayer application built with Node.js and Socket.IO, demonstrating expertise in full-stack game logic and persistent connection management.",
    techStack: ["React", "Node.js", "Socket.IO", "Express", "Tailwind CSS"],
    liveLink: "https://hero-io-example.com",
    githubLink: "https://github.com/user/hero-io",
  },
  {
    id: 2,
    title: "GameHub - E-commerce Gaming Platform",
    image: "https://i.ibb.co/fVF3zwvH/gamehub.jpg",
    description:
      "A modern e-commerce platform for gaming products. Features include user authentication, product filtering, and a secure checkout process using MERN stack technologies.",
    techStack: ["React", "MongoDB", "Express", "Node.js", "Stripe API"],
    liveLink: "https://gamehub-example.com",
    githubLink: "https://github.com/user/gamehub",
  },
  {
    id: 3,
    title: "FreeLio - Freelancer Marketplace Clone",
    image: "https://i.ibb.co/qY42F6VN/freelio.jpg",
    description:
      "A robust platform connecting clients and freelancers, featuring comprehensive profile management, job posting, and bid submission functionalities.",
    techStack: [
      "React",
      "Tailwind CSS",
      "MongoDB",
      "Redux",
      "Authentication (JWT)",
    ],
    liveLink: "https://freelio-example.com",
    githubLink: "https://github.com/user/freelio",
  },
];

// Component for a single project card
const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden transition duration-500 hover:shadow-2xl">
    {/* Project Image */}
    <div className="h-60 overflow-hidden">
      <img
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        className="w-full h-full object-cover transition duration-500 hover:scale-105"
      />
    </div>

    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-blue-600 bg-blue-100"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
        >
          <FaLink />
          <span>Live Site</span>
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition duration-300"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-extrabold text-primary text-center mb-12">
        My Web Development Projects
      </h1>

      {/* Grid for project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <p className="text-center text-lg text-gray-600 mt-12">
        These projects demonstrate my growing skills in full-stack development,
        especially using the MERN stack, learned during my Batch 12 web
        development course.
      </p>
    </div>
  );
};

export default Projects;

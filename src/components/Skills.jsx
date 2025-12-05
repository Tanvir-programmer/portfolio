import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
// Assuming you would also want an icon for Postman, which is often SiPostman
import { SiPostman } from "react-icons/si";

// Define a common structure for skill items
const skillItems = [
  // Frontend
  { name: "HTML5", icon: FaHtml5, level: "Expert", category: "Frontend" },
  { name: "CSS3", icon: FaCss3Alt, level: "Expert", category: "Frontend" },
  {
    name: "JavaScript",
    icon: FaJs,
    level: "Intermediate",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: "Expert",
    category: "Frontend",
  },
  { name: "React", icon: FaReact, level: "Intermediate", category: "Frontend" },

  // Backend
  {
    name: "Node.js",
    icon: FaNodeJs,
    level: "Intermediate",
    category: "Backend",
  },
  {
    name: "Express",
    icon: SiExpress,
    level: "Intermediate",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    level: "Intermediate",
    category: "Backend",
  },

  // Tools/Other
  { name: "GitHub", icon: FaGithub, level: "Tool", category: "Tools" },
  { name: "Figma", icon: FaFigma, level: "Tool", category: "Tools" },
  { name: "Postman", icon: SiPostman, level: "Tool", category: "Tools" },
];

// Helper function to render a single skill card
const SkillCard = ({ name, icon: Icon, level }) => (
  <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-xl transition duration-300 hover:scale-105">
    <Icon className="text-5xl text-blue-600 mb-2" />
    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
    <p className="text-sm font-medium text-primary mt-1">{level}</p>
  </div>
);

const Skills = () => {
  // Group skills by category
  const skillsByCategory = skillItems.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {});

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-5xl font-extrabold text-primary text-center mb-12">
        My Skills
      </h1>

      {/* Map over categories and render each section */}
      {Object.entries(skillsByCategory).map(([category, skills]) => (
        <div key={category} className="mb-10">
          <h2 className="text-3xl text-center font-bold text-gray-700 mb-6 border-b-2 border-primary pb-2">
            {category}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

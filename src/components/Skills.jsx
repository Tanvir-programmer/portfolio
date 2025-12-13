import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";

const skillItems = [
  {
    name: "HTML5",
    icon: FaHtml5,
    level: "Expert",
    category: "Frontend",
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    level: "Expert",
    category: "Frontend",
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    level: "Intermediate",
    category: "Frontend",
    color: "#F7DF1E",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: "Expert",
    category: "Frontend",
    color: "#06B6D4",
  },
  {
    name: "React",
    icon: FaReact,
    level: "Intermediate",
    category: "Frontend",
    color: "#61DAFB",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    level: "Intermediate",
    category: "Backend",
    color: "#339933",
  },
  {
    name: "Express",
    icon: SiExpress,
    level: "Intermediate",
    category: "Backend",
    color: "#ffffff",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    level: "Intermediate",
    category: "Backend",
    color: "#47A248",
  },
  {
    name: "JWT",
    icon: SiJsonwebtokens, // You'll need to import { SiJsonwebtokens } from "react-icons/si"
    level: "Intermediate",
    category: "Backend",
    color: "#d63aff",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    level: "Tool",
    category: "Tools",
    color: "#ffffff",
  },
  {
    name: "Figma",
    icon: FaFigma,
    level: "Tool",
    category: "Tools",
    color: "#F24E1E",
  },
  {
    name: "Postman",
    icon: SiPostman,
    level: "Tool",
    category: "Tools",
    color: "#FF6C37",
  },
];

const SkillCard = ({ name, icon: Icon, level, color }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.2 }}
    className="group relative flex flex-col items-center p-6 bg-gray-900/40 border border-gray-800 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-primary/50"
  >
    {/* Glow Effect on Hover */}
    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>

    <Icon
      className="text-5xl mb-4 transition-all duration-300 group-hover:scale-110"
      style={{ color: color }}
    />

    <h3 className="text-sm font-bold text-gray-200 uppercase tracking-widest text-center">
      {name}
    </h3>

    <div className="mt-3 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
        {level}
      </span>
    </div>
  </motion.div>
);

const Skills = () => {
  const skillsByCategory = skillItems.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-24 px-4 bg-[#0b1120]">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-black text-white italic tracking-tighter mb-4"
          >
            TECHNICAL <span className="text-primary">STACK</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            My diverse set of skills ranging from frontend design to backend
            architecture.
          </p>
        </div>

        {/* Categories */}
        {Object.entries(skillsByCategory).map(
          ([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xl font-bold text-white uppercase tracking-widest">
                  {category}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent"></div>
                <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  {skills.length} Items
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {skills.map((skill, index) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default Skills;

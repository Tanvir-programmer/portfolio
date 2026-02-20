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
  SiNextdotjs,
} from "react-icons/si";

const skillItems = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    level: "Intermediate",
    category: "Frontend",
    color: "#ffffff",
  },
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
    icon: SiJsonwebtokens,
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

const SkillCard = ({ name, icon: Icon, level, color }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{
      y: -10,
      scale: 1.05,
      rotateX: 12,
      rotateY: 12,
    }}
    style={{ perspective: "1000px" }}
    className="group relative flex flex-col items-center p-6 bg-[#1e293b]/30 border border-white/5 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:bg-[#1e293b]/50"
  >
    {/* Dynamic Glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl blur-2xl transition-opacity duration-500"
      style={{ backgroundColor: color }}
    ></div>

    <Icon
      className="text-5xl mb-4 relative z-10 transition-transform duration-500 group-hover:scale-110"
      style={{ color: color, filter: `drop-shadow(0 0 12px ${color}44)` }}
    />

    <h3 className="text-[11px] font-black text-white uppercase tracking-[0.2em] text-center relative z-10">
      {name}
    </h3>

    <div className="mt-4 flex items-center gap-1.5 relative z-10">
      <div className="flex gap-1">
        {[1, 2, 3].map((dot) => (
          <motion.span
            key={dot}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: dot * 0.2 }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        ))}
      </div>
      <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest">
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
    <section
      id="skills"
      className="relative py-24 px-4 bg-[#0f172a] overflow-hidden"
    >
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 -right-20 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="inline-block px-4 py-1 mb-4 rounded-full border border-primary/30 bg-primary/10"
          >
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">
              Tech-Stack
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6"
          >
            EXPERTISE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-orange-500">
              & LOGIC
            </span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Content by Category */}
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category} className="mb-20 last:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="flex items-center gap-6 mb-12"
            >
              <h3 className="text-xl font-bold text-white uppercase tracking-widest">
                {category}
              </h3>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-700 to-transparent"></div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            >
              {skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

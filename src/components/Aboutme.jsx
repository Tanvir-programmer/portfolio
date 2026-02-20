import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Code2,
  Rocket,
  Layout,
  ArrowRight,
  Zap,
  Database,
  Server,
  Cpu,
} from "lucide-react";
import { NavLink } from "react-router";

const AboutMe = () => {
  // Container triggers every time it enters the viewport
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const skills = [
    {
      label: "Frontend",
      text: "Mastering React & Framer Motion.",
      icon: <Layout className="w-5 h-5" />,
    },
    {
      label: "Backend Focus",
      text: "Deep diving into Node, Express & MongoDB architecture.",
      icon: <Database className="w-5 h-5" />,
    },
    {
      label: "Architecture",
      text: "Building scalable, production-ready APIs.",
      icon: <Server className="w-5 h-5" />,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#030712] overflow-hidden py-24 px-6">
      {/* Ambient background animations */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/30 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/20 blur-[120px] rounded-full"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="relative z-10 max-w-6xl w-full"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6"
          >
            <Cpu size={12} /> System.Identity
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl lg:text-8xl font-black tracking-tighter text-white mb-6"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-emerald-400">
              Me
            </span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 group bg-[#0b1120]/50 border border-white/10 backdrop-blur-3xl rounded-[2.5rem] p-10 lg:p-14 shadow-2xl relative overflow-hidden"
          >
            {/* Hover Highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Code2 className="text-primary" /> Bridging Design & Logic
              </h3>

              <div className="space-y-6 text-gray-400 text-lg lg:text-xl leading-relaxed">
                <p>
                  I am an{" "}
                  <span className="text-white font-semibold">
                    Expert Frontend Developer
                  </span>{" "}
                  with a deep love for clean, maintainable architecture.
                </p>

                <p className="bg-white/5 p-6 rounded-2xl border-l-4 border-primary italic">
                  "Currently, I am heavily focused on mastering the{" "}
                  <span className="text-primary font-bold">MERN Stack</span>,
                  with a specific emphasis on the{" "}
                  <span className="text-white font-bold underline decoration-primary underline-offset-8">
                    Backend ecosystem
                  </span>
                  ."
                </p>

                <p>
                  My goal is to bridge the gap between stunning visuals and
                  powerful, scalable server-side logic, ensuring every pixel is
                  backed by a robust API.
                </p>
              </div>

              <motion.div
                variants={itemVariants}
                className="mt-10 flex flex-wrap gap-4"
              >
                <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl flex items-center gap-2 hover:bg-primary/80 transition-all">
                  <a href="#contact"> Let's Connect</a> <ArrowRight size={18} />
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Sidebar Stats */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  x: 10,
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                className="p-6 bg-white/[0.02] border border-white/10 rounded-3xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {skill.label}
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">{skill.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Live Learning Status */}
            <motion.div
              variants={itemVariants}
              className="p-8 bg-gradient-to-br from-primary/20 to-blue-600/10 border border-primary/20 rounded-[2rem] flex flex-col gap-4"
            >
              <div className="flex justify-between items-center">
                <span className="text-primary font-black tracking-widest text-xs uppercase">
                  Current Sprint
                </span>
                <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
              </div>
              <p className="text-white font-medium">
                Deep-diving into{" "}
                <span className="font-bold">
                  Node.js Performance Optimization
                </span>{" "}
                & Database Indexing.
              </p>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="h-full bg-primary"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { LuBookOpen, LuCalendar, LuMapPin } from "react-icons/lu";

const Education = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="education"
      className="relative min-h-[80vh] flex flex-col justify-center items-center text-white py-24 px-6 bg-[#0f172a] overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 max-w-4xl w-full"
      >
        {/* Title Section */}
        <div className="text-center mb-20">
          <motion.h2
            variants={itemVariants}
            className="text-primary text-[10px] font-black tracking-[0.5em] uppercase mb-4"
          >
            My Journey
          </motion.h2>
          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-black tracking-tighter mb-6 uppercase"
          >
            Education
          </motion.h1>
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-24 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </div>

        {/* Education Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -8 }}
          className="group relative"
        >
          {/* Animated Border Glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/40 to-blue-500/40 rounded-3xl blur-sm opacity-20 group-hover:opacity-100 transition duration-700"></div>

          <div className="relative bg-[#1e293b]/40 border border-white/10 backdrop-blur-3xl p-8 lg:p-12 rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
              {/* Icon Container */}
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="flex-shrink-0 bg-gradient-to-br from-primary to-blue-600 p-6 rounded-2xl text-white text-4xl shadow-xl shadow-primary/20"
              >
                <FaGraduationCap />
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
                      Higher Secondary Certificate
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-primary text-xs font-black uppercase tracking-widest">
                      <span className="flex items-center gap-1.5 bg-primary/10 px-3 py-1 rounded-md border border-primary/20">
                        <LuBookOpen size={14} /> Science
                      </span>
                      <span className="flex items-center gap-1.5 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-md border border-blue-500/20">
                        <LuCalendar size={14} /> Class of 2020
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-300 font-medium text-lg mb-6 italic">
                  <LuMapPin className="text-primary" />
                  <h3>Nasaratpur Degree College</h3>
                </div>

                <p className="text-slate-400 leading-relaxed text-lg mb-8 max-w-2xl">
                  Completed my higher secondary education with a major in
                  Science. This period was instrumental in developing my
                  analytical thinking and{" "}
                  <span className="text-white font-bold">
                    logical problem-solving
                  </span>{" "}
                  abilities, which I now apply to full-stack software
                  development.
                </p>

                {/* Status Indicator */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </div>
                  <span className="text-emerald-400 font-black tracking-[0.2em] text-[10px] uppercase">
                    Status: Successfully Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;

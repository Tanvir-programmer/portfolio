import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div
      id="education"
      className="min-h-[70vh] flex flex-col justify-center items-center text-white py-20 px-4 bg-[#0b1120]"
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl lg:text-6xl font-black mb-2">Education</h1>
        <div className="w-20 h-1.5 bg-primary rounded-full mb-12 mx-auto"></div>
      </motion.div>

      {/* Education Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-3xl w-full"
      >
        {/* Decorative Glow behind the card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-20"></div>

        <div className="relative bg-gray-900 border border-gray-800 backdrop-blur-xl p-8 lg:p-10 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-6 items-start">
          {/* Icon Column */}
          <div className="bg-primary/10 p-4 rounded-xl text-primary text-3xl">
            <FaGraduationCap />
          </div>

          {/* Text Content Column */}
          <div className="flex-1 border-l-2 border-gray-800 md:pl-8 pl-0 md:border-l-2 md:border-gray-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white group-hover:text-primary transition-colors">
                Higher Secondary Certificate (HSC)
              </h2>
              <span className="mt-2 sm:mt-0 px-4 py-1 bg-primary/20 text-primary text-sm font-bold rounded-full border border-primary/30">
                Class of 2020
              </span>
            </div>

            <h3 className="text-xl text-blue-400 mb-4 font-medium flex items-center gap-2">
              Nasaratpur Degree College
            </h3>

            <p className="text-gray-400 leading-relaxed text-lg">
              Focused on Science/General studies, laying the analytical
              foundation for my transition into software engineering and
              advanced web development.
            </p>

            {/* Status Badge */}
            <div className="mt-6 flex items-center gap-2 text-green-400 text-sm font-semibold">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Completed
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;

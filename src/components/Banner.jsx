import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    // 💡 Changes:
    // - Reduced margin-top on mobile: `mt-5` (down from mt-20)
    // - Used `flex items-center justify-center` to ensure vertical and horizontal centering.
    <div className="hero min-h-screen md:min-h-[70vh] w-full mt-15 mb-5 rounded-xl flex items-center justify-center">
      {/* 💡 Changes: 
      - Added `justify-center` as the default to ensure centering on mobile.
      - Removed `w-full` from here as the `hero-content` class should handle width. */}
      <div className="hero-content flex-col justify-center lg:flex-row-reverse lg:justify-between gap-10 lg:gap-20 p-4 sm:p-6">
        {/* Image Animation */}
        <motion.img
          src="https://i.ibb.co/ns0vhtsc/1758095584933-removebg-preview.png"
          // Class ensures image is centered on mobile: `mx-auto`
          className="max-w-xs sm:max-w-sm lg:max-w-sm rounded-full shadow-2xl mx-auto"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Text Side */}
        <motion.div
          className="w-full lg:w-auto"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* 💡 Changes: 
          - Further adjusted font sizes for very small screens: `text-4xl sm:text-6xl` */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-center lg:text-left">
            HI, I'M <br /> <span className="text-primary">TANVIR RAHMAN</span>
          </h1>

          {/* 💡 Changes: 
          - Further adjusted font sizes for very small screens: `text-xl sm:text-2xl` */}
          <p className="py-6 text-xl sm:text-2xl lg:text-3xl text-center lg:text-left">
            <ReactTyped
              strings={["MERN Stack Developer", "Frontend Developer"]}
              typeSpeed={60}
              backSpeed={20}
              className="font-bold text-secondary"
            />
          </p>

          {/* Ensures buttons and icons center on mobile, align left on desktop */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <div>
              <motion.button
                className="btn btn-primary w-full sm:w-auto"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#projects"> View My Work</a>
              </motion.button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-4 sm:mt-0 justify-center text-3xl">
              <a
                href="https://github.com/Tanvir-programmer"
                target="_blank"
                className="hover:text-primary transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/tanvir.rahman.343601/"
                target="_blank"
                className="hover:text-primary transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/md-tanvir1/"
                target="_blank"
                className="hover:text-primary transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;

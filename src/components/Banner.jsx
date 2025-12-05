import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[60vh] my-7 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse justify-space-between gap-20">
        {/* Image Animation */}
        <motion.img
          src="https://i.ibb.co/ns0vhtsc/1758095584933-removebg-preview.png"
          className="max-w-sm rounded-[50% ]shadow-2xl"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-7xl font-bold text-center lg:text-left">
            HI, I'M <br></br>{" "}
            <span className="text-primary">TANVIR RAHMAN</span>
          </h1>

          <p className="py-6 text-3xl text-center lg:text-left">
            <ReactTyped
              strings={["MERN Stack Developer", "Frontend Developer"]}
              typeSpeed={60}
              backSpeed={20}
              className="font-bold text-secondary"
            />
          </p>

          <div className="flex items-center border-1 gap-4">
            <div>
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-5 justify-center lg:justify-start text-3xl">
              <a
                href="https://github.com/your-github"
                target="_blank"
                className="hover:text-primary transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://facebook.com/your-facebook"
                target="_blank"
                className="hover:text-primary transition"
              >
                <FaFacebook />
              </a>

              <a
                href="https://linkedin.com/in/your-linkedin"
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

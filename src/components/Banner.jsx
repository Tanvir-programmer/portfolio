import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";
const Banner = () => {
  return (
    <div className="hero min-h-[60vh]  my-20 rounded-xl ">
      <div className="hero-content flex-col lg:flex-row-reverse justify-space-between gap-20">
        {/* Image Animation */}
        <motion.img
          src="https://i.ibb.co/ns0vhtsc/1758095584933-removebg-preview.png"
          className="max-w-sm rounded-full shadow-2xl mx-auto lg:mx-0"
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

          <div className="flex items-center justify-center lg:justify-start gap-4">
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
            <div className="flex gap-5 justify-center lg:justify-start text-3xl">
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

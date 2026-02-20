import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0f172a] mt-10 px-5 my-10">
      {/* Background Decorative Circles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary opacity-5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary opacity-5 blur-[100px] rounded-full"></div>

      <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between gap-8 lg:gap-16 p-6 z-10 w-full max-w-7xl">
        {/* Image Section - Scaled for responsive container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-10 animate-pulse"></div>
          <img
            src="https://i.ibb.co.com/VYm14twC/Gemini-Generated-Image-ykjprgykjprgykjp.png"
            className="relative max-w-[180px] lg:max-w-[280px] rounded-full border-2 border-gray-800 shadow-2xl mx-auto object-cover"
            alt="Tanvir Rahman"
          />
        </motion.div>

        {/* Text Side */}
        <motion.div
          className="text-center lg:text-left flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4 className="text-primary font-mono text-xs sm:text-sm tracking-[0.3em] mb-2 uppercase">
            Welcome to My World
          </h4>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-2 uppercase">
            I'M{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              TANVIR RAHMAN
            </span>
          </h1>

          <div className="text-lg sm:text-2xl text-gray-300 font-semibold mb-4 h-8">
            <ReactTyped
              strings={[
                "Frontend Expert",
                "MERN Stack Developer",
                "Sports Enthusiast",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </div>

          <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mb-6 mx-auto lg:mx-0">
            I am a specialized{" "}
            <span className="text-white font-semibold">
              Expert Frontend Developer
            </span>{" "}
            focused on engineering high-performance, accessible, and visually
            stunning web architectures. Leveraging my deep expertise in{" "}
            <span className="text-primary font-bold italic">
              React & Next.js
            </span>
            , I am currently scaling my capabilities into the{" "}
            <span className="text-white font-semibold">MERN Stack</span> to
            build secure, data-driven full-stack applications with Node.js and
            MongoDB.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
            <motion.button
              className="btn btn-primary btn-sm md:btn-md px-8 rounded-full font-bold shadow-lg shadow-primary/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#projects">View Projects</a>
            </motion.button>

            <div className="flex gap-6 text-2xl">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/Tanvir-programmer",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/md-tanvir1/",
                },
                {
                  icon: <FaFacebook />,
                  link: "https://www.facebook.com/tanvir.rahman.343601/",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-primary transition-all transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;

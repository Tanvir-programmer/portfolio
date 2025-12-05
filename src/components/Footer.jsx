import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-100/50 backdrop-blur-md text-neutral-content py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">
            TANVIR <span className="text-primary">RAHMAN</span>
          </h3>
          <p className="text-sm text-gray-300 leading-6">
            Expert Frontend Developer & MERN Stack Learner.  
            I build clean, modern, and high-performance web applications.
          </p>

          {/* Social Media */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://github.com/Tanvir-programmer"
              target="_blank"
              className="text-white hover:text-primary text-2xl transition-all"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/md-tanvir1/"
              target="_blank"
              className="text-white hover:text-primary text-2xl transition-all"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.facebook.com/tanvir.rahman.343601/"
              target="_blank"
              className="text-white hover:text-primary text-2xl transition-all"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* MIDDLE */}
        <div>
          <h6 className="text-lg font-semibold text-white mb-3">Quick Links</h6>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-primary transition">Home</a></li>
            <li><a href="#aboutme" className="hover:text-primary transition">About Me</a></li>
            <li><a href="#skills" className="hover:text-primary transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h6 className="text-lg font-semibold text-white mb-3">Legal</h6>
          <ul className="space-y-2">
            <li><a className="hover:text-primary transition">Terms of Use</a></li>
            <li><a className="hover:text-primary transition">Privacy Policy</a></li>
            <li><a className="hover:text-primary transition">Cookie Policy</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-400 text-sm mt-10">
        © {new Date().getFullYear()} Tanvir Rahman — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

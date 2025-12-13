import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] border-t border-gray-800 pt-16 pb-8 px-6 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full mb-12">
          {/* Brand/Bio */}
          <div className="md:col-span-5">
            <h3 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase">
              Tanvir <span className="text-primary">Rahman</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              A specialized Frontend Developer focused on building robust,
              accessible, and high-performance user interfaces for the modern
              web.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-500 text-xs font-bold uppercase tracking-wider">
                  Available for Hire
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Navigation
            </h4>
            <ul className="grid grid-cols-1 gap-4">
              {["home", "aboutme", "skills", "projects", "contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link}`}
                      className="text-gray-500 hover:text-primary transition-colors font-medium"
                    >
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Connect
            </h4>
            <div className="flex gap-4 mb-8">
              {[
                {
                  icon: <FaGithub />,
                  url: "https://github.com/Tanvir-programmer",
                },
                {
                  icon: <FaLinkedin />,
                  url: "https://www.linkedin.com/in/md-tanvir1/",
                },
                {
                  icon: <FaFacebook />,
                  url: "https://www.facebook.com/tanvir.rahman.343601/",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 border border-gray-800 text-white rounded-xl hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              Interested in collaborating? Drop me an email or find me on social
              media.
            </p>
          </div>
        </div>

        {/* Bottom Bar - Copyright Centered */}
        <div className="w-full pt-8 border-t border-gray-900 flex flex-col items-center gap-4 text-gray-500 text-sm">
          {/* This <p> is naturally centered by the parent's "items-center" */}
          <p className="text-center order-2 md:order-1">
            © CopyRight Reserved {new Date().getFullYear()} Tanvir Rahman
          </p>

          <div className="flex gap-8 order-1 md:order-2">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

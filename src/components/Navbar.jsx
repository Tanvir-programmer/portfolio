import React, { useState, useEffect } from "react";
import { LiaDownloadSolid } from "react-icons/lia";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const sections = ["home", "aboutme", "skills", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let scrollPos = window.scrollY + window.innerHeight / 3;
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveLink(section);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (e, id) => {
    e.preventDefault();
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveLink("home");
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    if (document.activeElement) {
      document.activeElement.blur();
    }
  };

  const navItemClass = (id) =>
    `relative px-3 py-2 font-semibold transition-all duration-300 ${
      activeLink === id ? "text-primary" : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav
      className={`fixed bg-[#0f172a]/80 backdrop-blur-xl top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "border-b border-gray-800 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <button
            onClick={(e) => handleNavigation(e, "home")}
            className="group flex items-center gap-1"
          >
            <span className="text-2xl font-black tracking-tighter text-white uppercase">
              Tanvir <span className="text-primary">Rahman</span>
            </span>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-4">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => handleNavigation(e, section)}
                  className={navItemClass(section)}
                >
                  {section === "aboutme"
                    ? "About"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeLink === section && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Animated Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/12XD81aNGtWNs3-wWcP0fGCLqQBoRv-c8/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-red-600 text-white font-bold rounded-full shadow-lg shadow-primary/25 transition-all overflow-hidden active:scale-95"
          >
            {/* Shimmer Effect */}
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />

            <span className="relative z-10 flex items-center gap-2">
              Resume{" "}
              <LiaDownloadSolid className="group-hover:translate-y-0.5 transition-transform" />
            </span>
          </motion.a>
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-gray-900 border border-gray-800 rounded-2xl w-52 space-y-2"
          >
            {sections.map((s) => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  onClick={(e) => handleNavigation(e, s)}
                  className="text-gray-300 font-bold"
                >
                  {s === "aboutme" ? "ABOUT" : s.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

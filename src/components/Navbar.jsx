import React, { useState, useEffect } from "react";
import { LiaDownloadSolid } from "react-icons/lia";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const sections = ["home", "aboutme", "skills", "projects", "contact"];

  const navItemClass = (id) =>
    `p-2 rounded-lg font-bold transition-all duration-200 
     ${
       activeLink === id
         ? "bg-primary text-white text-md shadow-md"
         : "text-white hover:text-primary text-md hover:bg-white/10"
     }`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActiveLink("home");
  };

  // Intersection Observer to detect sections
  useEffect(() => {
    const handleScroll = () => {
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

  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-base-100/50 backdrop-blur-md shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <button onClick={scrollToTop} className={navItemClass("home")}>
                Home
              </button>
            </li>
            <li>
              <a href="#aboutme" className={navItemClass("aboutme")}>
                About Me
              </a>
            </li>
            <li>
              <a href="#skills" className={navItemClass("skills")}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className={navItemClass("projects")}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className={navItemClass("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <button
          onClick={scrollToTop}
          className="btn btn-ghost text-2xl font-bold"
        >
          TANVIR <span className="text-primary hidden lg:block">RAHMAN</span>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <button onClick={scrollToTop} className={navItemClass("home")}>
              Home
            </button>
          </li>
          <li>
            <a href="#aboutme" className={navItemClass("aboutme")}>
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" className={navItemClass("skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className={navItemClass("projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={navItemClass("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Resume Button */}
      <div className="navbar-end">
        <a
          href="https://drive.google.com/file/d/1tX8wqPFldfReoQwfm1muyo_jIYUm3Oxw/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-primary rounded-lg font-bold text-white flex items-center"
        >
          Resume <LiaDownloadSolid className="inline ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

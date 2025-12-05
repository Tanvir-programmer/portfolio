import React, { useState } from "react";
import { LiaDownloadSolid } from "react-icons/lia";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const navItemClass = (id) =>
    `p-2 rounded-lg font-bold transition-all duration-200 
     ${
       activeLink === id
         ? "bg-primary text-white text-md shadow-md"
         : "text-white hover:text-primary text-md hover:bg-white/10"
     }`;

  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-base-100/50 backdrop-blur-md shadow-sm">
      {/* Navbar Start */}
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
              <a
                href="#home"
                onClick={() => setActiveLink("home")}
                className={navItemClass("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutme"
                onClick={() => setActiveLink("about")}
                className={navItemClass("about")}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => setActiveLink("skills")}
                className={navItemClass("skills")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setActiveLink("projects")}
                className={navItemClass("projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setActiveLink("contact")}
                className={navItemClass("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <a className="btn btn-ghost text-2xl font-bold">
          TANVIR <span className="text-primary hidden lg:block">RAHMAN</span>
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <a
              href="#home"
              onClick={() => setActiveLink("home")}
              className={navItemClass("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#aboutme"
              onClick={() => setActiveLink("about")}
              className={navItemClass("about")}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setActiveLink("skills")}
              className={navItemClass("skills")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setActiveLink("projects")}
              className={navItemClass("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setActiveLink("contact")}
              className={navItemClass("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Resume Button */}
      <div className="navbar-end">
        <a className="btn bg-primary text- rounded-lg font-bold text-white">
          Resume <LiaDownloadSolid className="inline ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

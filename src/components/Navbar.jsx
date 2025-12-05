import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li className="font-semibold hover:text-primary">
              <a href="#home">Home</a>
            </li>
            <li className="font-semibold hover:text-primary">
              <a href="#about">About Me</a>
            </li>
            <li className="font-semibold hover:text-primary">
              <a href="#skills">Skills</a>
            </li>
            <li className="font-semibold hover:text-primary">
              <a href="#projects">Projects</a>
            </li>
            <li className="font-semibold hover:text-primary">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <a className="btn btn-ghost text-xl font-bold">
          TANVIR <span className="text-orange-600">RAHMAN</span>
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold hover:text-primary">
            <a href="#home">Home</a>
          </li>
          <li className="font-semibold hover:text-primary">
            <a href="#about">About Me</a>
          </li>
          <li className="font-semibold hover:text-primary">
            <a href="#skills">Skills</a>
          </li>
          <li className="font-semibold hover:text-primary">
            <a href="#projects">Projects</a>
          </li>
          <li className="font-semibold hover:text-primary">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;

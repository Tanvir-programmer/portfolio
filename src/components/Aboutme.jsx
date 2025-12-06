import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-white py-5 px-4">
      {/* Heading */}
      <h1 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-2">
        About Me
      </h1>
      <div className="w-24 h-1 bg-primary-gradient rounded-full mb-6 mx-auto"></div>

      {/* Subtitle */}
      <h3 className="text-xl lg:text-2xl font-semibold text-gray-300 mb-6 text-center">
        Expert Frontend Developer | MERN Stack Learner
      </h3>

      {/* Description Card */}
      <div className="max-w-3xl bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg p-6 lg:p-10">
        <p className="text-gray-200 text-lg lg:text-xl leading-relaxed text-center lg:text-left">
          I am a passionate{" "}
          <span className="text-primary font-semibold">
            Expert Frontend Developer
          </span>{" "}
          focused on crafting intuitive, visually appealing, and
          high-performance web experiences. I specialize in modern UI
          development and enjoy transforming ideas into clean, production-ready
          interfaces using{" "}
          <span className="text-primary font-semibold">
            React.js, Tailwind CSS, and JavaScript
          </span>
          .
          <br />
          <br />
          Alongside my frontend expertise, I am actively expanding my backend
          skills as a{" "}
          <span className="text-primary font-semibold">MERN Stack learner</span>
          , working with{" "}
          <span className="text-primary font-semibold">
            Node.js, Express, and MongoDB
          </span>{" "}
          to build scalable APIs and full-stack applications.
          <br />
          <br />I am committed to clean code, continuous learning, and creating
          digital experiences that are both user-centric and technically strong.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

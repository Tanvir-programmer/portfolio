import React from "react";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AboutMe from "../components/Aboutme";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <section id="aboutme">
        <AboutMe></AboutMe>
      </section>
      <section id="projects">
        <Projects></Projects>
      </section>
      <section id="skills">
        {" "}
        <Skills></Skills>
      </section>
    </div>
  );
};

export default Home;

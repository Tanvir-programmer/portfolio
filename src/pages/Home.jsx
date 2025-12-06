import React from "react";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AboutMe from "../components/Aboutme";
import Contact from "../components/Contact";
import Education from "../components/Education";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <section id="aboutme">
        <AboutMe></AboutMe>
      </section>
      <section id="skills">
        {" "}
        <Skills></Skills>
      </section>
      <section id="projects">
        <Projects></Projects>
      </section>

      <Education></Education>
      <section className="contact">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default Home;

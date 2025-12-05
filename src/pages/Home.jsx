import React from "react";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <section id="projects">
        <Projects></Projects>
      </section>
      <Skills></Skills>
    </div>
  );
};

export default Home;

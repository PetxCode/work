import React from "react";
import HomePage from "./component/HomePage";
import { About } from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";

const page = () => {
  return (
    <div>
      <HomePage />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default page;

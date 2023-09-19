import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navbar />

      <Hero />
      <About />
      <Skills />

      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

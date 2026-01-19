import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Achievements/>
      <Contact/>

      <Footer />
    </>
  );
}

export default App;

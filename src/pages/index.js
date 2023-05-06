import React, { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Skills from "../components/Experience";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StartSection from "../components/StartSection";

const Home = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <StartSection />
      <About />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;

import React, { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Skills from "../components/Experience";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StartSection from "../components/StartSection";
import { LoadingPage, LoadingText } from "../components/Projects/StyledElements";
import { Blocks } from "react-loader-spinner";
import { useEffect } from "react";

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage>
          <Blocks size={200} color={'white'} loading={loading} />
          <LoadingText>Page is loading...</LoadingText>
        </LoadingPage>
      ) : (
        <>
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <StartSection />
          <About />
          <Skills />
          <Contact />
        </>
      )
      }
    </div>
  );
};

export default Home;

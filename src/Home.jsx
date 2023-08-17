import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Services from "./Services";
import Contact from "./Contact";
import Teams from "./Teams";
import Testx from "./Testx";

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => {
    updateHomePage();
  }, [updateHomePage]); // Include 'updateHomePage' in the dependency array

  return (
    <>
      <HeroSection />
      <Services />
      {/* <Contact /> */}
      <Testx/>
      <Teams />
    </>
  );
};

export default Home;

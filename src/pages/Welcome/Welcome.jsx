import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Features from "./Features.jsx";
import Faq from "./Faq.jsx";
import Join from "./Join.jsx";
import Footer from "./Footer.jsx";

const Welcome = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Faq />
      <Join />
      <Footer />
    </>
  );
}

export default Welcome;
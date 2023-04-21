import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Features from "./Features.jsx";
import Faq from "./Faq.jsx";
import Join from "./Join.jsx";
import Footer from "./Footer.jsx";

import { useRef } from "react";

const Welcome = () => {

  const ref = useRef(null);

  const handleScrollClikToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const handleScrollClikToDown = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <>
      <Navbar />
      <Hero handleScrollClikToDown={handleScrollClikToDown} />
      <About />
      <div ref={ref}></div>
      <Features />
      <Faq />
      <Join />
      <Footer handleScrollClikToUp={handleScrollClikToUp} />
    </>
  );
}

export default Welcome;
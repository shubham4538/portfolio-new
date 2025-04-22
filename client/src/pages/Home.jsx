import React from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="fira-regular text-white bg-gray-900 min-h-screen divide-y-[1px] divide-y-reverse divide-gray-600">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;

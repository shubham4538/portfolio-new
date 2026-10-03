import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import NewScroll from "../components/NewScroll";

function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("fade-section");
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const value = Math.min(
        1,
        Math.max(0, -rect.top / (rect.height - window.innerHeight)),
      );
      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fira-regular text-white bg-gray-900 min-h-screen divide-y-[1px] divide-y-reverse divide-gray-600">
      <Header />
      <NewScroll progress={progress} />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

import { useEffect, useRef, useState } from "react";

const myStyles = {
  container: {
    height: "100vh",
    overflow: "hidden",
    position: "relative",
  },

  section: {
    position: "absolute",
    inset: 0,
    height: "100%",
    width: "100%",
    transition: "opacity 600ms ease",
  },
};

export default function App() {
  const currentSection = useRef(0);
  const scrolling = useRef(false);

  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    <div>Section 1</div>,
    <div>Section 2</div>,
    <div>Section 3</div>,
  ];

  useEffect(() => {
    const handleWheel = (e) => {
      const direction = e.deltaY > 0 ? 1 : -1;

      if (
        (direction > 0 && currentSection.current === sections.length - 1) ||
        (direction < 0 && currentSection.current === 0)
      ) {
        return;
      }
      e.preventDefault();

      if (scrolling.current) return;

      const nextSection = Math.max(
        0,
        Math.min(currentSection.current + direction, sections.length - 1),
      );

      if (nextSection === currentSection.current) return;

      currentSection.current = nextSection;
      setActiveSection(nextSection);

      scrolling.current = true;

      setTimeout(() => {
        scrolling.current = false;
      }, 700);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [sections.length]);

  return (
    <div style={myStyles.container}>
      {sections.map((section, index) => (
        <div
          key={index}
          style={{
            ...myStyles.section,
            opacity: activeSection === index ? 1 : 0,
            pointerEvents: activeSection === index ? "auto" : "none",
          }}
        >
          {section}
        </div>
      ))}
    </div>
  );
}

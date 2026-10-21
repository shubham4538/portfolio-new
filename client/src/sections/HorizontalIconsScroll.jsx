import { useEffect, useRef, useState } from "react";

import ShapeGrid from "../components/ShapeGrid";
import { langIcons } from "../data";

const ICON_SIZE = 15;
const ICON_GAP = 38;

// NEW: Controls how quickly icons change around the center
const EFFECT_RADIUS = 100;
const MIN_SCALE = 1.7;
const MIN_OPACITY = 0;
const CURVE_STRENGTH = 0.25;

export default function HorizontalIconsScroll() {
  const [activeName, setActiveName] = useState(langIcons[0][0]);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const trackRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;
    let frameId = 0;

    const updateScroll = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const width = window.innerWidth;
        setViewportWidth(width);

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const scrollDistance = section.offsetHeight - window.innerHeight;
        const maxTranslate = Math.max(0, track.scrollWidth - width);

        const progress =
          scrollDistance > 0
            ? Math.min(
                1,
                Math.max(0, (window.scrollY - sectionTop) / scrollDistance),
              )
            : 0;

        setTranslateX(-maxTranslate * progress);
      });
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });
    window.addEventListener("resize", updateScroll);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-cover">
        <div style={{ width: "100%", height: "600px", position: "absolute" }}>
          <ShapeGrid
            shape="square"
            direction="diagonal"
            lineColor="#514479"
            hoverColor="#919eff"
            hoverFillColor="#ffffff"
            fillOpacity={0.05}
            cellSize={30}
            speed={0}
            tiltX={0}
            tiltY={0}
            rainbow={false}
            lineWidth={0.5}
            radius={1.9}
            trail={0.7}
            glow={0.4}
            clickCascade={false}
          />
        </div>
        <div className="w-max absolute top-80 xs:top-50 sm:top-50 px-2 py-1 rounded-md border border-gray-400 left-0 right-0 m-auto">
          {activeName}
        </div>
        <div
          ref={trackRef}
          className="mt-60 xs:mt-20 sm:mt-10"
          style={{
            display: "flex",
            alignItems: "center",
            gap: ICON_GAP,
            padding: "0 50vw",
            transform: `translate(${translateX}px, -50px)`,
            willChange: "transform",
          }}
        >
          {langIcons.map((icon, i) => {
            // NEW: Measure each icon's distance from screen center
            const iconCenter =
              viewportWidth / 2 +
              i * (ICON_SIZE + ICON_GAP) +
              ICON_SIZE / 2 +
              translateX;

            const distance = Math.abs(iconCenter - viewportWidth / 2);
            const proximity = Math.min(1, distance / EFFECT_RADIUS);
            const falloff = Math.exp(-6 * proximity * proximity);

            // NEW: Center = 3x scale + full opacity
            const scale = MIN_SCALE + 3 * falloff;
            const opacity = MIN_OPACITY + 1 * falloff;

            // NEW: Vertical curve based on distance from center
            const normalizedDistance = Math.min(1, distance / EFFECT_RADIUS);
            const curveY = CURVE_STRENGTH * 100 * normalizedDistance ** 2;

            if (scale > 4) {
              if (activeName !== icon[0]) {
                setActiveName(icon[0]);
              }
            }

            return (
              <div
                key={i}
                style={{
                  flex: `0 0 ${ICON_SIZE}px`,
                  width: ICON_SIZE,
                  height: ICON_SIZE,
                  display: "grid",
                  placeItems: "center",
                  color: "#fff",
                  opacity,
                  transform: `translateY(${curveY}px) scale(${scale})`,
                  transformOrigin: "center",
                  willChange: "transform, opacity",
                }}
              >
                <img src={`/assets/images/language/${icon[1]}.png`} />
              </div>
            );
          })}
        </div>
        <img
          src="/assets/images/avatar/skills.png"
          className="max-h-72 absolute bottom-0 left-0 right-0 m-auto"
        />
      </div>
    </section>
  );
}

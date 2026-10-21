import { useEffect, useRef, useState } from "react";

import { langIcons } from "../data";

const ICON_SIZE = 15;
const ICON_GAP = 38;

const EFFECT_RADIUS = 100;
const MIN_SCALE = 1.7;
const MIN_OPACITY = 1;
const CURVE_STRENGTH = 0;

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
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-[#0f091d]"
      id="skills"
    >
      <div
        className="sticky top-0 h-screen flex items-center overflow-hidden"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 300% at center, black 35%, transparent 65%),linear-gradient(to bottom, black 85%, transparent)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
          backgroundImage: "url(./src/assets/images/bg/skills-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-x-0 justify-self-center top-34 xs:top-26">
          <div className="w-max fira-semibold text-3xl md:text-4xl bg-linear-to-r from-[#9AB2ED] to-[#C8ED79] text-transparent bg-clip-text">
            Skills
          </div>
        </div>
        <div className="w-max absolute top-60 sm:top-46 px-2 py-1 rounded-md border border-gray-400 left-0 right-0 m-auto">
          {activeName}
        </div>
        <div className="relative">
          <div
            ref={trackRef}
            className="mb-10 sm:mb-20"
            style={{
              display: "flex",
              alignItems: "center",
              gap: ICON_GAP,
              padding: "0 50vw",
              transform: `translate(${translateX}px)`,
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
              const falloff = Math.exp(-8 * proximity * proximity);

              // NEW: Center = 3x scale + full opacity
              const scale = MIN_SCALE + 3.5 * falloff;
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
                  <img
                    className="absolute transition-opacity duration-200 ease-in-out"
                    style={{ opacity: `${activeName === icon[0] ? 1 : 0}` }}
                    src={`/assets/images/language/color/${icon[1]}.png`}
                  />
                  <img
                    className="absolute transition-opacity duration-200 ease-in-out"
                    style={{ opacity: `${activeName === icon[0] ? 0 : 1}` }}
                    src={`/assets/images/language/white/${icon[1]}.png`}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <img
          src="/assets/images/avatar/skills-full.png"
          className="block xs:hidden absolute bottom-0 left-0 right-0 m-auto px-5"
        />
        <img
          src="/assets/images/avatar/skills.png"
          className="hidden xs:block max-h-72 absolute bottom-0 left-0 right-0 m-auto"
        />
      </div>
    </section>
  );
}

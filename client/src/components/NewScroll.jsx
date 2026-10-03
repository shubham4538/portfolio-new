import Hero from "./Hero";
import Hero2 from "./Hero2";

const myStyles = {
  fadeContainer: {
    height: "250vh",
    position: "relative",
  },

  sticky: {
    position: "sticky",
    top: 0,
    height: "100vh",
    overflow: "hidden",
    backgroundImage: 'url("/bg2.png")',
    backgroundSize: "cover",
  },

  screen: {
    position: "absolute",
    inset: 0,
    transition: "opacity 0.4s ease",
  },
};

function NewScroll({ progress }) {
  return (
    <div id="fade-section" style={myStyles.fadeContainer}>
      <div style={myStyles.sticky}>
        <div
          style={{
            ...myStyles.screen,
            opacity: progress < 0.25 ? 1 : 0,
          }}
        >
          <Hero />
        </div>

        <div
          style={{
            ...myStyles.screen,
            opacity: progress < 0.25 ? 0 : progress < 0.66 ? 1 : 0,
          }}
        >
          <Hero2 />
        </div>

        <div
          style={{
            ...myStyles.screen,
            opacity: progress >= 0.66 ? 1 : 0,
          }}
        >
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default NewScroll;

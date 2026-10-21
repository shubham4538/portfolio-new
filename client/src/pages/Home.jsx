import Header from "../sections/Header";
import HeroScroll from "../sections/HeroScroll";
import HorizontalIconsScroll2 from "../sections/HorizontalIconsScroll2";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

function Home() {
  return (
    <div className="fira-regular text-white bg-gray-900 min-h-screen divide-y divide-gray-600">
      <Header />
      <HeroScroll />
      <HorizontalIconsScroll2 />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

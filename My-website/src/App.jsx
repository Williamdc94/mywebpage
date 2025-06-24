import { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./hero";
import About from "./About";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handlescroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.clientHeight;
        if (window.scrollY >= top - height / 3) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <Hero />
      <About />
    </>
  );
}

export default App;

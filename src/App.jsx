import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTransition, animated, config } from "react-spring";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import "./App.scss";

const lightBackground = "/src/assets/images/light-rays-background.webp";
const darkBackground = "/src/assets/images/dark-rays-background.webp";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  const backgrounds = {
    light: lightBackground,
    dark: darkBackground,
  };

  const transitions = useTransition(theme, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="App">
      <Header onThemeChange={handleThemeChange} />
      <main>
        {transitions((style, item) => (
          <animated.div
            key={item}
            className="bg"
            style={{
              ...style,
              backgroundImage: `url(${backgrounds[item]})`,
            }}
          />
        ))}
        <div class="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;

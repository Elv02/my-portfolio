import React, { useEffect, useState } from "react";
import "./ThemeToggle.scss";
import lightBackground from '/src/assets/images/light-background.jpg';
import darkBackground from '/src/assets/images/dark-background.jpg';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--light-background-image', `url(${lightBackground})`);
    document.documentElement.style.setProperty('--dark-background-image', `url(${darkBackground})`);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default ThemeToggle;

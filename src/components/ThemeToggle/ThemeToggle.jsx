import React, { useEffect, useState } from "react";
import "./ThemeToggle.scss";

const ThemeToggle = ({ onThemeChange }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    onThemeChange(theme);
  }, [theme, onThemeChange]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default ThemeToggle;

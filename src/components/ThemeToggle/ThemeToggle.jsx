import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import { FaSun, FaMoon } from "react-icons/fa";
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
    <>
      <button className="theme-toggle mobile-toggle" onClick={toggleTheme}>
        {theme === "light" ? <FaSun /> : <FaMoon />}
      </button>
      <div className="theme-toggle desktop-toggle">
        <Switch
          onChange={toggleTheme}
          checked={theme === "light"}
          offColor="#ffcc00"
          onColor="#333"
          uncheckedIcon={
            <div className="switch-icon">
              <FaMoon />
            </div>
          }
          checkedIcon={
            <div className="switch-icon">
              <FaSun />
            </div>
          }
          height={20}
          width={48}
          handleDiameter={24}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        />
      </div>
    </>
  );
};

export default ThemeToggle;

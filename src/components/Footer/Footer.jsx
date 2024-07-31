import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Lauren Hoeft. All rights reserved.</p>
        <div className="footer-links">
          <a
            href="https://github.com/Elv02"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/lauren-hoeft"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:laurenhoeft42@gmail.com">Email</a>
        </div>
        <p>
          <a href="https://wallpapers.com/wallpapers/abstract-blue-light-rays-background-9k4iqrr8wc9u7mn1.html">
            Background images by wpsadm
          </a>{" "}
          on Wallpapers.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;

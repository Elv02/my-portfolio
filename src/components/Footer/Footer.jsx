import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        <h3>Contact</h3>
        <div className="footer__links">
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
      </div>
      <div className="footer__section">
        <h3>Copyright</h3>
        <p>
          Made with <span className="heart">&hearts;</span> in the Waterloo
          Region.
        </p>
        <p>
          &copy; {new Date().getFullYear()} Lauren Hoeft. All rights reserved.
        </p>
      </div>
      <div className="footer__section">
        <h3>Credit</h3>
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

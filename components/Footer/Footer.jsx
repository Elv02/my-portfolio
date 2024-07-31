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
          Photos of the Kitchener/Waterloo Area by{" "}
          <a
            href="https://commons.wikimedia.org/wiki/User:Ryan_Hodnett"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ryan Hodnett
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

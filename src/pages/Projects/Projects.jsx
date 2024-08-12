import React from "react";
import "./Projects.scss";
import Card from "/src/components/Card/Card";

import IRaycastGame from "../../assets/images/RaycastHeadshot.png";
import ITkalc from "../../assets/images/TKalculator.webp";
import ITkImg from "../../assets/images/TkImg.webp";
import IDungeonGame from "../../assets/images/Dungeon.webp";
import IPortfolio from "../../assets/images/MyPortfolio.webp";

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects__cards">
        <Card
          image={IRaycastGame}
          title="Raycasting Game"
          subtitle="Capstone Project, BrainStation Software Engineering Bootcamp"
        >
          <p>
            This game project was my capstone at BrainStation, showcasing my
            ability to implement complex game mechanics using raycasting
            techniques. The game features interactive pickups, basic networking
            with WebSockets, and smooth collision handling.
          </p>
          <a
            href="https://github.com/Elv02/rc"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </Card>
        <Card
          image={IDungeonGame}
          title="Dungeon Crawler Game"
          subtitle="Final Year Project, University of Guelph"
        >
          <p>
            A dungeon crawler game developed during my final year at university.
            Beyond the basic requirements, I implemented advanced features such
            as A* pathfinding for smarter enemy behavior, sliding wall
            collisions, and interactive doorways. This project highlights my
            interest in game development and my ability to go above and beyond
            the base specifications.
          </p>
          <a
            href="https://github.com/Elv02/cis-4820"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </Card>
        <Card image={ITkImg} title="TK Image Viewer" subtitle="Python Tkinter Application">
          <p>
            A straightforward image viewer built with Python's Tkinter library.
            This project demonstrates my ability to create functional desktop
            applications with a simple and intuitive user interface.
          </p>
          <a
            href="https://github.com/Elv02/tk-image-viewer"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </Card>
        <Card image={ITkalc} title="TK Calculator" subtitle="Python Tkinter Application">
          <p>
            A fully functional calculator application developed using Python and
            Tkinter. It supports basic arithmetic operations and showcases my
            understanding of event-driven programming in Python.
          </p>
          <a
            href="https://github.com/Elv02/tkalculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </Card>
        <Card image={IPortfolio} title="Portfolio Site" subtitle="Personal Portfolio Project">
          <p>
            This very site you're browsing is a project in itself! Built with
            modern web technologies, it serves as a showcase of my skills and
            projects. It's a work in progress, continuously evolving as I learn
            and grow as a developer.
          </p>
          <a
            href="https://github.com/Elv02/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </Card>
      </div>
    </div>
  );
}

export default Projects;

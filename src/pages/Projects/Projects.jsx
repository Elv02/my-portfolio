import React from "react";
import "./Projects.scss";
import Card from "/src/components/Card/Card";

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <Card>
        <p>Game programming project...</p>
        <a>Github</a>
      </Card>
      <Card>
        <p>Raycast javascript project...</p>
      </Card>
      <Card>
        <p>TK Image Viewer</p>
      </Card>
      <Card>
        <p>TK Calculator</p>
      </Card>
    </div>
  );
}

export default Projects;

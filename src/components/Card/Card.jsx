import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Card.scss";

const Card = ({ image, title, subtitle, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        className={`card ${isExpanded ? "expanded" : ""}`}
        onClick={toggleExpand}
      >
        <img src={image} alt={title} className="card-image" />
        <div className="card-header">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        {isExpanded && <div className="card-content">{children}</div>}
        <div className="indicator">
          {isExpanded ? <FaChevronUp /> : <FaChevronDown onClick={toggleExpand}/>}
        </div>
      </div>
      {isExpanded && <div className="overlay" onClick={toggleExpand}></div>}
    </>
  );
};

export default Card;

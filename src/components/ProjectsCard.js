import "./projectCard.sass";
import React from "react";
import { NavLink } from "react-router-dom";
import data from "../data/PojectCardData";

const card = data.map((e, i) => {
  return (
    <Card
      key={i}
      imgSrc={e.imgSrc}
      title={e.title}
      text={e.text}
      view={e.view}
    />
  );
});

function Card({ imgSrc, title, text, view }) {
  return (
    <div className="p-card">
      <img src={imgSrc} alt="img" />
      <h2 className="project-title">{title}</h2>
      <div className="p-info">
        <p>{text}</p>
        <div className="p-link-btn">
          <a href={view} target="blank" className="btn">
            View
          </a>

          <NavLink to="www.google.com" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
}

function ProjectsCard() {
  return (
    <div className="projects-container">
      <h1>projects</h1>
      <div className="p-container">{card}</div>
    </div>
  );
}

export default ProjectsCard;

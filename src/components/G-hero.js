import "./g-hero.sass";

import React from "react";
import coverImg from "../assets/computer.jpg";

function Ghero({ title, text }) {
  return (
    <div className="hero-img" style={{ backgroundImage: `url(${coverImg})` }}>
      <div className="heading">
        <h1> {title}</h1>
        <p> {text}</p>
      </div>
    </div>
  );
}

export default Ghero;

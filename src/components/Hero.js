import "./Hero.sass";
import introImg from "../assets/absrt.jpg";

import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introImg} alt="bg-img" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER.</p>
        <h1>Web Developer.</h1>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn-clear">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

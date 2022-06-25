import "./AboutContent.sass";

import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/braky.jpg";
import img2 from "../assets/code.jpg";

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1> Who Am I?</h1>
        <p>
          ryyhbhg ghyyh ggthh hfhbvt yghyjrk jfbj fbhjnh jybkunh gtukn jhnjy
          jgtnuyh
        </p>
        <Link to="/contact" className="btn">
          Contact Me
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="box_img top">
            <img src={img1} alt="img" className="img" />
          </div>
          <div className="box_img bottom">
            <img src={img2} alt="img" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;

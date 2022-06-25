import "./footer.sass";

import React from "react";
import {
  FaFacebookF,
  FaHome,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <din className="footer-container">
        <div className="left">
          <div className="adress">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>beni malal</p>
              <p>Morocco</p>
            </div>
          </div>
          <div>
            <h4 className="phone">
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +212 669816515
            </h4>
          </div>
          <div>
            <h4 className="email">
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              soussousalahiddine@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            I’m a developer with experience in building websites for small and
            medium-sized businesses. Whether you’re trying to win work, list
            your services or even create a whole online store – I can help!
            <br /> - I’m experienced in HTML and CSS 3, JavaScript, WordPress
            <br /> - I’ll fully project manage your brief from start to finish
            <br /> - Regular communication is really important to me, so let’s
            keep in touch!
          </p>
          <div className="social">
            <FaFacebookF
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaLinkedinIn
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </din>
    </div>
  );
}

export default Footer;

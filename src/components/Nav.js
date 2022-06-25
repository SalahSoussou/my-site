import "./nav-style.sass";
import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [menu, setMenu] = React.useState(false);
  const togelMenu = () => setMenu(!menu);

  const [color, setColor] = React.useState(false);
  const changeColor = () => {
    window.scrollY > 100 ? setColor(true) : setColor(false);
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1> Portofolio</h1>
      </Link>
      <ul style={{ top: `${menu ? "0" : "-1500px"}` }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="menu-icon" onClick={togelMenu}>
        {menu ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

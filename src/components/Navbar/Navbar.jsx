import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

import "./NavbarStyles.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const changeLanguage = (lang) => {
    localStorage.setItem(language, lang);
  };
  return (
    <nav className="navbar">
      <Link to="home" className="nav-logo">
        Moorfo
      </Link>

      <div className="menu-icons" onClick={() => setClicked((prev) => !prev)}>
        <i className={!clicked ? "fa-solid fa-bars" : "fas fa-times"}></i>
      </div>

      <ul className={` nav-menu ${clicked ? "active" : ""} `}>
        {MenuItems.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.url}
              className="nav-link"
              onClick={() => setClicked(false)}
            >
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}
        <li className="lang">
          <i className="fa-solid fa-globe"></i>{" "}
          <select name="langs" id="langs">
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
            <option value="en">En</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import { MenuItems } from "./MenuItems";
import "./NavbarStyles.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("lang" || "en")
  );
  const { t, i18n } = useTranslation("global");

  const changeLanguage = (lang) => {
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setClicked(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        Moorfo
      </Link>

      <div className="menu-icons" onClick={() => setClicked((prev) => !prev)}>
        <i className={!clicked ? "fa-solid fa-bars" : "fas fa-times"}></i>
      </div>

      <ul className={` nav-menu ${clicked ? "active" : ""} `}>
        <li>
          <Link to={"/"} className="nav-link" onClick={() => setClicked(false)}>
            <i className={"fa-solid fa-house-user"}></i>
            {t("navbar-menu.home")}
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            className="nav-link"
            onClick={() => setClicked(false)}
          >
            <i className={"fa-solid fa-circle-info"}></i>
            {t("navbar-menu.about")}
          </Link>
        </li>
        <li>
          <Link
            to={"/service"}
            className="nav-link"
            onClick={() => setClicked(false)}
          >
            <i className={"fa-solid fa-briefcase"}></i>
            {t("navbar-menu.service")}
          </Link>
        </li>
        <li>
          <Link
            to={"/contact"}
            className="nav-link"
            onClick={() => setClicked(false)}
          >
            <i className={"fa-solid fa-address-book"}></i>
            {t("navbar-menu.contact")}
          </Link>
        </li>

        <li className="lang">
          <i className="fa-solid fa-globe"></i>{" "}
          <select
            name="langs"
            id="langs"
            onChange={(e) => changeLanguage(e.target.value)}
          >
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

{
  /* {MenuItems.map((item, idx) => (
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
        ))} */
}

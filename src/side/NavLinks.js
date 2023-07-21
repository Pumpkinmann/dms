import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li id="home_button">
        <NavLink to="/" exact>
          <h2>主页</h2>
        </NavLink>
      </li>
      <li>
        <NavLink to="/xiting" exact>
          <h2>烯烃</h2>
        </NavLink>
      </li>
      <li>
        <NavLink to="/ruanhuaye" exact>
          <h2>软化液</h2>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

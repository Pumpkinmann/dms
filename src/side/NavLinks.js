import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = props => {

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          烯烃
        </NavLink>
      </li>
      <li>
        <NavLink to="/ruanhuaye" exact>
          软化液
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

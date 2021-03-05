import React from "react";
import avatar from "../img/avatar.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="nav-top">
          <img src={avatar} alt="" />
        </div>
        <div className="nav-middle">
          <ul className="nav-items">
            <li className="nav-item">
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/skills" exact activeClassName="active">
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" exact activeClassName="active">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/courses" exact activeClassName="active">
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" exact activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

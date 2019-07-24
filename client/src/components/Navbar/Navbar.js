import React from "react";
import "./Navbar.css";
import bellyFullLogo from "../../images/bellyFullLogo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={bellyFullLogo} alt="logo" />
      <ul>
        <li>
          <a className="navbar-brand" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="/login">
            Log In
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="/about">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

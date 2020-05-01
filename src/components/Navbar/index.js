import React from 'react';
import { Link } from 'react-router-dom';
// import { dom } from '@fortawesome/fontawesome-svg-core';
import "./style.css";

function Navbar(){
    return(
        <nav className="navbar">
        <span className="navbar-brand mb-0 h1" id="header">
            <h1>Megha Murthy</h1>
        </span>
        <div id="side">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                <Link
              to="/about"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
                  {/* <Link className="nav-link active" to="/">About</Link> */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul> 
        </div>    
    </nav>
    )
}

export default Navbar;
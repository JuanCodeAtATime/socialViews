import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "black" }}>
      <Link className="navbar-brand" to="/">
        fLikes <span id="pro"><i className='fas fa-plane-departure' style={{ fontSize: "24px", color: "red" }}></i></span>
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/landing"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/register"
              className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}
            >
              Signup
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

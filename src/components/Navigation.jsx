import React from "react";
import { Link, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand  noteNavigation">
        <div className="container noteNavigation">
          <Link className="navbar-brand" to="/">
            KIDZIE
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/appone" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/appone">
                  Form
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/salesCoupons" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/salesCoupons">
                  Sales Coupons
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/SalesPage" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/SalesPage">
                  Sales Page
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);

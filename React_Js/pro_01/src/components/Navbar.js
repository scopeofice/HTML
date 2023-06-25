import React from "react";
import PropTypes from "prop-types";



export default function Navbar(props) {


  return (
    <div>
      <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = { title: PropTypes.string };

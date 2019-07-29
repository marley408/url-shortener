import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div className="container">
        <div className="navbar-brand" href="#">
          <h1 className="logo">Shortly</h1>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/history">
                Link History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                onClick={() => {
                  localStorage.removeItem('token');
                }}
                className="nav-link"
                to="/"
              >
                Sign out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

/* <span className="sr-only">(current)</span> */

export default Navbar;

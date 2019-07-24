import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';

// commented out code is for the responsive button

export default class LandingNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <div className="navbar-brand" href="#">
            <h1 className="logo">Shortly</h1>
            {/* <p className="logo2">URL Shortener</p> */}
          </div>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" exact to="/home">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/history">
                  Link History
                </NavLink>
              </li>
              <li className="nav-item sign-out">
                <NavLink className="nav-link" to="/">
                  Sign out
                </NavLink>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    );
  }
}

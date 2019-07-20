import React, { Component } from 'react';

export default class Navbar extends Component {
  // need to set state for current page link to be highlighted

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <div className="navbar-brand" href="#">
            <h1 className="logo">Shortly</h1>
            {/* <p className="logo2">URL Shortener</p> */}
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
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link History
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

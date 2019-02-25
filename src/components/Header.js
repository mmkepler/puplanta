import React, { Component } from 'react';
import puplanta from '../img/puplanta_long_name.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/">
                <img src={puplanta} className="puplanta-logo" alt="puplanta logo">
                </img>
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/stores">Stores</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/parks">Parks</Link>
                  </li>
                </ul>
              </div>
            </nav>
      </div>
    )
  }
}

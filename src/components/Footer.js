import React, { Component } from 'react';
import '../App.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <footer>
          <nav className="fixed-bottom">
            <p className="footer-left">© 2018 Puplata</p>
            <p className="footer-right">by <a href="http://www.mmkepler.com/" rel="noopener noreferrer" target="_blank">Melissa Kepler</a></p>
          </nav>
        </footer>
      </div>
    )
  }
}

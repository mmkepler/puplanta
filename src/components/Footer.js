import React, { Component } from 'react';
import '../App.css';

export default class Footer extends Component {
  render() {
    return (
        <footer id="footer">
          <div className='row'>
            <span className='col-sm-2'></span>
            <p className="footer-left col-sm-4 col-xs-12">© 2018 Puplata</p>
            <p className="footer-right col-sm-4 col-xs-12">by <a href="http://www.mmkepler.com/" rel="noopener noreferrer" target="_blank">Melissa Kepler</a></p>
            <span className='col-sm-2'></span>
          </div>
        </footer>
    )
  }
}

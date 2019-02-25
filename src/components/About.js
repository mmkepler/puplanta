import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' id='about'>
          <h1>So what is this?</h1>
            <p>
            This is my attempt to show off my abiility to host a site using AWS. I thought it might be something I would actually use in real life. I love dogs and have 3 fur babies.
            </p>
            <h2 className='about-text'>Wait, it's not real?</h2>
              <p>It is real, but its not a site looking to make money. The information is real, though! I built this as part of my code portfolio.</p>
              <h2 className='about-text'>Code portfolio?</h2>
              <p>I'm a JavaScript Developer!
              </p>
                <a href='https://github.com/Missarachnid/puplanta' target='_blank' rel="noopener noreferrer">
                  <button className='code-button'>This site's code</button>
                </a>
              
        </div>
      </div>
    )
  }
}

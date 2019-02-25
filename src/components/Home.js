import React, { Component } from 'react';
import dog1 from '../img/laika_in_tree_small.jpg';
import dog2 from '../img/Nimbus_1.jpg';
import dog3 from '../img/drogon_ball.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' id='home'>
          <div>
            <h1 className='home-title'>Hey Atlanta!</h1>
            <div className='image-text-holder'>
              <img src={dog1} className='home-image' alt='a husky-corgi mix posing in a forked tree'></img>
              <br></br>
              <h4 className='home-text'>Want all your dog info in one place?</h4>
            </div>
            <br></br>
            <a href='/about'>
              <button className='home-button'><strong>Find out what we're about</strong></button>
            </a>
          </div>
        </div>
        
        <div className='jumbotron' id='home'>
          <div>
            <h1 className='home-title'>Where to shop?</h1>
            <div className='image-text-holder'>
              <img src={dog2} className='home-image' alt='A fancy pomeranian standing in the wind with leaves in his tail'></img>
              <br></br>
              <h4 className='home-text'>Where can you find Hound Haute Couture?</h4>
            </div>
            <br></br>
            <a href='/stores'>
              <button className='home-button'><strong>Stores</strong></button>
            </a>
          </div>
        </div>

        <div className='jumbotron' id='home'>
          <div>
            <h1 className='home-title'>Where to play?</h1>
            <div className='image-text-holder'>
              <img src={dog3} className='home-image' alt='A black german shepherd sitting waiting for a yellow ball to be thrown'></img>
              <br></br>
              <h4 className='home-text'>Where can we play ball?</h4>
            </div>
            <br></br>
            <a href='/parks'>
              <button className='home-button'><strong>Parks</strong></button>
            </a>
          </div>
        </div>

      </div>
    )
  }
}

import React, { Component } from 'react';
import corgi_tail from '../img/corgi_tail.png';
import peach from '../img/peach.png';
import corgi from '../img/corgi_face_100.svg';
import dog_park from '../img/dog_park.png';

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' id='home'>
          <div>
            <h1 className='home-title'>Hey Atlanta!</h1>
            <div className='image-text-holder'>
              <img src={peach} className='peach' alt='peach icon that looks similar to a corgi butt'></img>
              <h4 className='home-text d-inline'>Want all your dog info in one place?</h4>
              <img src={corgi_tail} className='corgi-tail' alt='A corgi butt that is shaped similar to a peach'></img>
            </div>
            <br></br>
            <a href='/about'>
              <button className='home-button'>Find out what we're about</button>
            </a>
          </div>
        </div>
        
        <div className='jumbotron' id='home'>
          <div>
            <h1 className='home-title'>Where to shop?</h1>
            <div className='image-text-holder'>
              <img src={corgi} className='corgi' alt='A cartoon corgi face!'></img>
              <br></br>
              <h4 className='home-text d-inline'>Where can you find Hound Haute Couture?</h4>
            </div>
            <br></br>
            <a href='/stores'>
              <button className='home-button'>Stores</button>
            </a>
          </div>
        </div>

        <div className='jumbotron' id='home'>
          <div>
            <h1 className='home-title'>Where to play?</h1>
            <div className='image-text-holder'>
              <img src={dog_park} className='dog-park' alt='A dog playing catch'></img>
              <br></br>
              <h4 className='home-text d-inline'>Where can we play ball?</h4>
            </div>
            <br></br>
            <a href='/parks'>
              <button className='home-button'>Park</button>
            </a>
          </div>
        </div>

      </div>
    )
  }
}

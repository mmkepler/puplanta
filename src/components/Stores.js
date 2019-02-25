import React, { Component } from 'react';
import Map from './Map.js';
//import axios from 'axios';

export default class Stores extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let locations;
  /*axios.get('https://cors-anywhere.herokuapp.com/https://api.petsmart.com/v1/search/stores?model.requestMetric=false&model.latitude=33.8884544&model.longitude=-84.3842454')
    .then(response => {
      
      console.log(response.data);
    })
    .catch(err => {
      console.log("error " + err);
    });*/
    
  }


  render() {
    return (
      <div>
        <h1>Stores coming soon!</h1>
      
      </div>
    )
  }
}

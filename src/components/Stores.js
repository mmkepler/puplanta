import React, { Component } from 'react';
import Map from './Map.js';
import axios from 'axios';
var parseString = require('xml2js').parseString;

export default class Stores extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let locations;
    axios.get('https://cors-anywhere.herokuapp.com/https://api.petsmart.com/v1/search/stores?model.requestMetric=false&model.latitude=33.8884544&model.longitude=-84.3842454')
    .then(response => {
      
      console.log(response.data);
    })
    .catch(err => {
      console.log("error " + err);
    });
    
  }


  render() {
    return (
      <div>
        <h1>Here are the Petsmart stores in the Atlanta area.</h1>
        <p>Other stores will be added soon</p>
      
      </div>
    )
  }
}

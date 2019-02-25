import React, { Component, Fragment } from 'react';
import Map from './Map.js';
let locations = require('../park_locations').default;
let park_locations = Array.from(locations);


//console.log(park_locations.forEach(el => console.log(el)));

export default class Parks extends Component {
  render() {
    return (
      <div>
        <h1>Atlanta Dog Parks</h1>
        <p>Click on a location for address and link</p>
        <div className='park-map-holder'>
        <Map
          id="myMap"
          options={{
            center: { lat: 33.8884544, lng: -84.3842454 },
            zoom: 9.4

          }}
          onMapLoad={map => {
            park_locations.forEach( el => {
              let window_info = `<div id="window-content"> <a id="title-link" target="_blank" rel="noopener" href=${el.properties.website}> <p id="title"> ${el.properties.title} </p> </a><p className="address"> ${el.properties.address} </p></div>`;
              //console.log(el.properties.website);
              var infowindow = new window.google.maps.InfoWindow({
                content: window_info
              });
              var marker = new window.google.maps.Marker({
              position: { lat: el.geometry.coordinates[1], lng: el.geometry.coordinates[0] },
              map: map,
              title: el.properties.title
            });
            marker.addListener('click', function() {
              infowindow.open(map, marker);
            });
            //console.log(el.properties.title);
            });
            
          }}
      />
      </div>
      </div>
    )
  }
}



/* var marker = new window.google.maps.Marker({
            position: { lat: 33.7679188, lng: -84.5610306 },
            map: map,
            title: 'Hello Atlanta!'
          }); */

/*<Map
        id="myMap"
        options={{
          center: { lat: 33.7679188, lng: -84.5610306 },
          zoom: 8
        }}
        onMapLoad={map => {
          locations.features.forEach( el => {
            console.log(el);
          });
          
        }}
      /> */
      /*let window_info = '<div id="window-content">' + '<a target="_blank" rel="noopener" href={{el.properties.website}}>' +  '<p className="title">' + '{{el.properties.title}}' + '</p>' + '</a>' + '<br>' + '</br>' + '<p className="address">' + '{el.properties.address}' + '</p>' + '<br>' + '</br>' + '<p>' +  '</p>' + '</div>'; */
import React, { Component } from 'react';


export default class Stores extends Component {
  constructor(props) {
    super(props);
    this.state = {data: this.props};
  }

  componentWillMount() {
  
    
  }


  render() {
    return (
      <div>
        <h1>Stores coming soon!</h1>
      </div>
    )
  }
}
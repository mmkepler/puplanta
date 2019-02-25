import React, { Component } from 'react';
import Footer from './Footer.js';
import Home from './Home.js';
import About from './About.js';
import Stores from './Stores.js';
import Parks from './Parks.js';
import Header from './Header.js';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import puplanta from '../img/puplanta_long_name.png';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        
          <div className="App">
            {/*Navigation Starts*/}
        <Router>
          <div>
        <Header />
            
            {/*Navigation Ends*/}
            {/*Routing Starts*/}
            
              <div className='main-content'>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/stores" component={Stores} />
                <Route path="/parks" component={Parks} />
              </Switch>
              </div>
              </div>
            </Router>
            {/*Routing Ends*/}
        
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

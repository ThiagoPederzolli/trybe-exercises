import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import About from './About';
// import HowTo from './HowTo';
// import Profile from './Profile';

class Home extends Component {
  render() {
    return(
      <div>
        <Link to="/about">About</Link>
        <h1>Minha HomePage</h1>      
      </div>
    )
  }
}

export default Home;
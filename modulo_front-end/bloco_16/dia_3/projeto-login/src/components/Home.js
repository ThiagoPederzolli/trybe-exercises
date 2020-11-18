import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        Home!
        <Link to="/login">Faça seu login aqui!</Link>
      </div>
    );
  }
}

export default Home;

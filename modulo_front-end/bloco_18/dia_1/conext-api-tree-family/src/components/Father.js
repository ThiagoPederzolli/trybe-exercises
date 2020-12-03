import React, { Component } from 'react';
import Daughter from './Daughter';

class Father extends Component {
  render() {
    return (
      <div>
        <h1>Eu sou o pai</h1>
        <Daughter />
      </div>
    );
  }
}

export default Father;

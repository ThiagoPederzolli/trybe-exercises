import React, { Component } from 'react';
import Father from './Father';

class Grandmother extends Component {
  render() {
    return (
      <div>
        <h1>Eu sou a avó</h1>
        <Father />
      </div>
    );
  }
}

export default Grandmother;

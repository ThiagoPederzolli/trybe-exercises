import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        <span>Estudante de desenvolvimento de software na Trybe </span>
        <Link to="/">Voltar para Home</Link>
      </div>
    )
  }
}

export default About;
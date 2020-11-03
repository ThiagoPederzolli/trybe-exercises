import React, { Component } from 'react';

class Solutions extends Component {
  render() {
    return (
      <div>
        {this.props.solutions.map((solution, index) => <p key={index}>{solution}</p> )}
      </div>
    )
  }
}

export default Solutions;
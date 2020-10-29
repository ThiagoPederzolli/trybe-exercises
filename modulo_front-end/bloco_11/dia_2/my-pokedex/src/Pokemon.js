import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    
    return (
      <div>
        Olá! do Pokemon {this.props.name}
        {/* <div className="infosContainer">
          <p>{this.props.name} Olá</p>
          <p>{this.props.type}</p>
          <p>Average weight: {this.props.averageWeight.value} {this.props.averageWeight.measurementUnit}</p>
        </div>
        <div className="imageContainer">
          <img src={this.props.image} alt={this.props.name} />
        </div> */}
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  measurementUnit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Pokemon;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css'

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight , image } = this.props.pokemon;
    return (
      <div className="pokemon">       
        <div className="infosContainer">
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <div className="imageContainer">
          <img src={image} alt={name} />
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.number,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string
  }).isRequired  
}

export default Pokemon;

{/* <div className="infoContainer">
<p>{this.props.name}</p>
</div> */}
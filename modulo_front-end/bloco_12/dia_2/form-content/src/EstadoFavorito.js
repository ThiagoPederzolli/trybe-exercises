import React, { Component } from 'react';

class EstadoFavorito extends Component {
  render() {
    const { id, name } = this.props;
    // const { value, handleChange } = this.props;
    // let error = undefined
    // if (value.length > 120) error = 'Texto muito grande!'
    return (
    <option value={id}>{name}</option>
    )
  }
}

export default EstadoFavorito;
{/* <label>
            Diga qual é o seu Estado Favorito do Brasil ou do React, você quem sabe.
            <textarea
            name="estadoFavorito"
            value={value}
            onChange={handleChange}/>
          </label>
          <span>{error ? error : ''}</span> */}
import React, { Component } from 'react';

class EstadoFavorito extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <fieldset>
          <label>
            Diga qual é o seu Estado Favorito do Brasil ou do React, você quem sabe.
            <textarea
            name="estadoFavorito"
            value={value}
            onChange={handleChange}/>
          </label>
        </fieldset>
    </div>
    )
  }
}

export default EstadoFavorito;
import React, { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import './Pokedex.css'
class Pokedex extends Component {
  render() {    
    return (<div className="pokedex">   
      {
      pokemons.map((pokemon) => {
        return (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        )
      })
    }
    </div>)
  }
}

export default Pokedex;
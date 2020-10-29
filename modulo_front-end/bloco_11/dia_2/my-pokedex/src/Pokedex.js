import React, { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends Component {
  render() {    
    return (<div> 
      <Pokemon name={pokemons[0].name}/>
      {/* {
      pokemons.map((pokemon) => {
        <Pokemon key={pokemon.id} name={pokemon.name} type={pokemon.type} value={pokemon.averageWeight.value} measurementUnit={pokemon.averageWeight.measurementUnit} image={pokemon.image} />
      })
    } */}
    </div>)
  }
}

export default Pokedex;
import React, { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import './Pokedex.css'

class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      posPokemon: 0
    }

    this.showPokemon = this.showPokemon.bind(this);
  }

  showPokemon() {
    this.setState((posAnterior) => ({
      posPokemon: posAnterior.posPokemon + 1
      // posPokemon: (state.posPokemon + 1) % numberOfPokemons
    }))
  }
  render() {
    // const pokemon = pokemons[this.state.posPokemon] 
    return (<div className="pokedex"> 

      {/* <Pokemon pokemon={pokemon} /> */}
        {
          pokemons.filter((pokemon) => pokemons.indexOf(pokemon) === this.state.posPokemon).map((pokemon) => {
            return (
              <Pokemon key={pokemon.id} pokemon={pokemon} />  
            )
          })
        }
        {/* <button onClick={() => this.showPokemon(pokemons.length)}>Próximo</button> */}
        <button onClick={this.showPokemon}>Próximo</button>
    </div>)
  }
}

// filter((pokemon) => pokemons.indexOf(pokemon) === this.state.posPokemon )

export default Pokedex;
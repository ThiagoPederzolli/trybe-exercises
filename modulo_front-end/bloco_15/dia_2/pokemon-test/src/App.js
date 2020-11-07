import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: undefined,
      pokemon: '',
    };
  }

  handleChange(e) {
    this.setState({
      pokemon: e.target.value,
    });
  }

  handleClick(pokemon) {
    fetch(`https://api.pokemontcg.io/v1/cards?name=${pokemon}`)
      .then(resolve => resolve.json())
      .then(data => this.setState({ data: data.cards[0] }));
  }

  render() {
    const { pokemon, data } = this.state;

    return (
      <div className="App-header">
        <div>
          <h1> Pokémon Cards</h1>
        </div>
        <div>
          <input
            type="text"
            onChange={e => this.handleChange(e)}
            data-testid="input-text"
          />
          <button type="button" onClick={() => this.handleClick(pokemon)}>
            Pesquisar
          </button>
        </div>
        <div>
          {data && (
            <div>
              <h3>{data.name}</h3>
              {data.types.map(type => (
                <p key={type}> {type}</p>
              ))}
              <img src={data.imageUrl} alt={`${data.name}-card`} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;

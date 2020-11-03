import React, { Component } from 'react';

class DadJokes extends Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    };
  }

  async fetchJokes() {
    this.setState(
      {loading: true},
      async () => {
        const requestReturn = await fetch('https://api.chucknorris.io/jokes/random/')
        const requestObject = await requestReturn.json()
        this.setState({
          loading: false,
          jokeObj: requestObject
        })
      }
    )
  }

  componentDidMount() {
    this.fetchJokes()
  }


  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
        storedJokes: [...storedJokes, jokeObj ]
      }))

    this.fetchJokes();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.value}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    )
  }

  render() {
    const { storedJokes, jokeObj, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, value }) => (<p key={id}>{value}</p>))}
        </span>

        {/* <span>RENDERIZAÇÃO CONDICIONAL</span> */}
        <p>{loading ? loadingElement : this.renderJokeElement()}</p>
      </div>
    )
  }
}

export default DadJokes;
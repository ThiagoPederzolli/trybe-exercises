import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      estadoFavorito: '',
      email: '',
      nome: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(target.name)
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h1>Esados e React: ferramenta incrível ou reagindo a regionalismos.</h1>
        <form className="form" />
        <label>
          Diga qual é o seu Estado Favorito do Brasil ou do React, você quem sabe.
          <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange}/>
        </label>

        <label>
          Email
          <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
        </label>

        <label>
          Nome
          <input name="nome" type="text" value={this.state.nome} onChange={this.handleChange}/>
        </label>

        <label>
          Idade 
          <input name="idade" type="number" value={this.state.idade} onChange={this.handleChange} />
        </label>

        <label>
          Vai comparecer à conferência?
          <input name="vaiComparecer" type="checkbox" value={this.state.vaiComparecer} onChange={this.handleChange} />
        </label>

        <label>
          Escolha sua palavra chave favorita:
          <select name="palavraChaveFavorita" value={this.state.palavraChaveFavorita} onChange={this.handleChange}>
            <option value="eestad">Estado</option>
            <option value="evento">Evento</option>
            <option value="props">Props</option>
            <option value="hooks">Hooks</option>
          </select>
        </label>
      </div>
    )
  }
}

export default Form;
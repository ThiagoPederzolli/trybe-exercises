import React, { Component } from 'react';
import EstadoFavorito from './EstadoFavorito';
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
        <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange}/>

      <fieldset>
        <label>
          Email
          <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
        </label>
      </fieldset>

      <fieldset>
        <label>
          Nome
          <input name="nome" type="text" value={this.state.nome} onChange={this.handleChange}/>
        </label>
      </fieldset>

      <fieldset>
        <label>
          Idade 
          <input name="idade" type="number" value={this.state.idade} onChange={this.handleChange} />
        </label>
      </fieldset>

      <fieldset>
        <label>
          Vai comparecer à conferência?
          <input name="vaiComparecer" type="checkbox" value={this.state.vaiComparecer} onChange={this.handleChange} />
        </label>
      </fieldset>

      <fieldset>
        <label>
          Escolha sua palavra chave favorita:
          <select name="palavraChaveFavorita" value={this.state.palavraChaveFavorita} onChange={this.handleChange}>
            <option value="eestad">Estado</option>
            <option value="evento">Evento</option>
            <option value="props">Props</option>
            <option value="hooks">Hooks</option>
          </select>
        </label>
      </fieldset>

      <fieldset>
        <label>
          Envie cópia do seu documento:
          <input type="file" />
        </label>
      </fieldset>
      </div>
    )
  }
}

export default Form;
import React, { Component } from 'react';
import MyInput from './MyInput';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      maiorDuvida: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target
    this.setState({
      [name]: value,
    })
  }


  render() {
    return(
      <div>
        <h1>Formulário</h1>
        <form className="formulario">
          <MyInput value={this.state.nome} handleChange={this.handleChange} />

        {/* <fieldset>
        <p>Select a maintenance drone:</p>
        <div>
          <input type="radio" id="huey" name="drone" value="huey"
                  checked/>
          <label for="huey">Huey</label>
        </div>

        <div>
        <input type="radio" id="dewey" name="drone" value="dewey"/>
        <label for="dewey">Dewey</label>
        </div>

          <div>
          <input type="radio" id="louie" name="drone" value="louie"/>
          <label for="louie">Louie</label>
          </div>
        </fieldset> */}

          <fieldset>
            <label>
              Qual assunto de React te dá mais dúvida?
              <select name="maiorDuvida" value={this.state.maiorDuvida} onChange={this.handleChange}>
                <option value="props">Props</option>
                <option value="estado">Estado</option>
                <option value="eventos">Eventos</option>
                <option value="componentes">Componentes</option>
              </select>
            </label>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form;
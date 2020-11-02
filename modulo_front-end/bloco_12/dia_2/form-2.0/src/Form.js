import React, { Component } from 'react';

class Form extends Component {
  render() {
    return(
      <div>
        <h1>Formulário</h1>
        <form className="formulario">
          <fieldset>
            <label>
              Nome:
              <input type="text" />
            </label>
          </fieldset>
          <fieldset>
            <label>
              Qual assunto de React te dá mais dúvida?
              <select>
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
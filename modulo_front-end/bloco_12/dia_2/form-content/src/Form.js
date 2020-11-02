import React, { Component } from 'react';
import EstadoFavorito from './EstadoFavorito';
class Form extends Component {
  constructor() {
    super();

     this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
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

    const estados = {
      'AC': 'Acre',
      'AL': 'Alagoas',
      'AP': 'Amapá',
      'AM': 'Amazonas',
      'BA': 'Bahia',
      'CE': 'Ceará',
      'DF': 'Distrito Federal',
      'ES': 'Espírito Santo',
      'GO': 'Goiás',
      'MA': 'Maranhão',
      'MT': 'Mato Grosso',
      'MS': 'Mato Grosso do Sul',
      'MG': 'Minas Gerais',
      'PA': 'Pará',
      'PB': 'Paraíba',
      'PR': 'Paraná',
      'PE': 'Pernambuco',
      'PI': 'Piauí',
      'RJ': 'Rio de Janeiro',
      'RN': 'Rio Grande do Norte',
      'RS': 'Rio Grande do Sul',
      'RO': 'Rondônia',
      'RR': 'Roraima',
      'SC': 'Santa Catarina',
      'SP': 'São Paulo',
      'SE': 'Sergipe',
      'TO': 'Tocantins'
  }
  
  const nomesEstados = Object.values(estados);
  const siglasEstados = Object.keys(estados);
  
    return (
      <div>
        <h1>Esados e React: ferramenta incrível ou reagindo a regionalismos.</h1>
        <form className="form" />
        <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange}/>
      
      <fieldset>
        <label>
          Nome
          <input name="nome" type="text" value={this.state.nome} onChange={this.handleChange}/>
        </label>
      </fieldset>

      <fieldset>
        <label>
          Email
          <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
        </label>
      </fieldset>

      <fieldset>
        <label>
          CPF 
          <input name="cpf" type="text" value={this.state.cpf} onChange={this.handleChange} maxLength="11" />
        </label>
      </fieldset>      

      <fieldset>
        <label>
          Ederenço 
          <input name="endereco" type="text" value={this.state.endereco} onChange={this.handleChange} />
        </label>
      </fieldset>

      <fieldset>
        <label>
          Cidade 
          <input name="cidade" type="text" value={this.state.cidade} onChange={this.handleChange} />
        </label>
      </fieldset>

      <fieldset>
        <label>
          Estado: 
          <select name="endereco" type="text" value={this.state.endereco} onChange={this.handleChange} >
            {              
              siglasEstados.forEach(sigla => {
                nomesEstados.map(nome => {
                  return (
                    <EstadoFavorito id={sigla} name={nome} />
                  )
                })
              })
            
            }
          </select>
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
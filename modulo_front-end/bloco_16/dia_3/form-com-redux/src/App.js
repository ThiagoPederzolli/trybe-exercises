import React, { Component } from 'react';
import './App.css';
import FormErrors from './FormErrors';

const states = [
  'Rio de Janeiro',
  'Minas Gerais',
  'Amapá',
  'Amazonas',
  'São Paulo',
  'Ceará',
  'Distrito Federal',
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      addressType: '',
      resume: '',
      role: '',
      roleDescription: '',
      hasEntered: false,
      formErrors: { email: '', password: '' },
    };
  }

  changeHandler = event => {
    let { name, value } = event.target;

    if (name === 'name') value = value.toUpperCase();

    if (name === 'address') value = this.validateAddress(value);

    this.updateState(name, value);
  };

  onBlurHandler = event => {
    let { name, value } = event.target;

    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  };

  updateState(name, value) {
    this.setState(state => ({
      [name]: value,
      formErrors: {
        ...state.formErrors,
        [name]: this.validateField(name, value),
      },
    }));
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '');

  handleSubmit = event => {
    event.preventDefault();
  };

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i);
        return isValid ? '' : ' is invalid';
      default:
        break;
    }

    return '';
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Dados pessoais</legend>
            <div className="container">
              Nome:
              <input
                type="name"
                name="name"
                maxLength="40"
                required
                value={this.state.name}
                onChange={this.changeHandler}
              />
            </div>
            <div className="container">
              Email:
              <input
                type="email"
                name="email"
                maxLength="50"
                required
                value={this.state.email}
                onChange={this.changeHandler}
              />
            </div>
            <div className="container">
              CPF:
              <input
                type="text"
                name="cpf"
                maxLength="11"
                required
                value={this.state.cpf}
                onChange={this.changeHandler}
              />
            </div>
            <div className="container">
              Endereço:
              <input
                type="text"
                name="address"
                maxLength="200"
                required
                value={this.state.address}
                onChange={this.changeHandler}
              />
            </div>
            <div className="container">
              Cidade:
              <input
                type="text"
                name="city"
                maxLength="28"
                required
                value={this.state.city}
                onBlur={this.onBlurHandler}
                onChange={this.changeHandler}
              />
            </div>
            <div className="container">
              Estado:
              <select
                name="countryState"
                required
                value={this.state.countryState}
                onChange={this.changeHandler}
              >
                {states.map((value, key) => (
                  <option key={key}>{value}</option>
                ))}
              </select>
            </div>
          </fieldset>
          <fieldset>
            <legend>Dados profissionais:</legend>
            <div className="container">
              Resumo do currículo:
              <textarea
                name="resume"
                maxLength="1000"
                required
                value={this.state.resume}
                onChange={this.changeHandler}
              />
            </div>
            <div className="container">
              Cargo:
              <input
                type="text"
                name="role"
                maxLength="40"
                required
                value={this.state.role}
                onChange={this.changeHandler}
                onMouseEnter={() => {
                  alert('Preencha com cuidado esta informação.');
                }}
              />
            </div>
            <div className="container">
              Descrição do cargo:
              <textarea
                name="roleDescription"
                maxLength="500"
                value={this.state.roleDescription}
                onChange={this.changeHandler}
              />
            </div>
          </fieldset>
        </form>
        <div className="container">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </div>
    );
  }
}

export default App;

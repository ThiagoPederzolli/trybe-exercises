import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions';

class Login extends Component {
  render() {
    const { logando } = this.props;
    return (
      <div>
        Login!
        <form action="">
          <label htmlFor="email">
            E-mail
            <input type="text" id="email" placeholder="digite seu email" />
          </label>
          <label htmlFor="senha">
            Senha
            <input type="text" id="senha" placeholder="digite sua senha." />
          </label>
          <Link to="/clientes" onClick={() => logando}>
            Logar
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logando: dispatch(login()),
});

export default connect(null, mapDispatchToProps)(Login);

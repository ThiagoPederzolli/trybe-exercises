import React, { Component } from 'react';
import { connect } from 'react-redux';

class Clientes extends Component {
  render() {
    const { login } = this.props;
    if (!login) return <div>Login não efetuado!</div>;
    return <div>Clientes!</div>;
  }
}

const mapStateToProps = state => ({
  login: state.loginReducer.login,
});

export default connect(mapStateToProps)(Clientes);

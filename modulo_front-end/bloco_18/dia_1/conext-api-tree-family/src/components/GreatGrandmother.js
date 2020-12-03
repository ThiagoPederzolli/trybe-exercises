import React, { Component } from 'react';
import Grandmother from './Grandmother';
import MyContext from './MyContext';

class GreatGrandmother extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 10000000,
    };
    this.handleSpendMoney = this.handleSpendMoney.bind(this);
  }

  handleSpendMoney() {
    this.setState(estadoAnterior => ({
      money: estadoAnterior.money - 100,
    }));
  }
  render() {
    const contextValue = {
      money: this.state.money,
      spendMoney: this.handleSpendMoney,
    };
    return (
      <MyContext.Provider value={contextValue}>
        <div>
          <h1>Eu sou a bisavó</h1>
          <Grandmother />
        </div>
      </MyContext.Provider>
    );
  }
}

export default GreatGrandmother;

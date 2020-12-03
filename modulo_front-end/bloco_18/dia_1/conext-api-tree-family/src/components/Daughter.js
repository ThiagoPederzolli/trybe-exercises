import React, { Component } from 'react';
import MyContext from './MyContext';

class Daughter extends Component {
  render() {
    return (
      <div>
        <h1>Eu sou a filhaaaa</h1>
        <MyContext.Consumer>
          {value => (
            <div>
              <p>Eu tenho {value.money} para gastar </p>
              <button onClick={value.spendMoney}> Pedir um IFOOD</button>
            </div>
          )}
        </MyContext.Consumer>
        {/* <p>Eu tenho {this.props.money} para gastar </p>
        <button onClick={this.props.spendMoney}> Pedir um IFOOD</button> */}
      </div>
    );
  }
}

export default Daughter;

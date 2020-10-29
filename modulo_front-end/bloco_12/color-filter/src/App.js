import './App.css';
import colors from './data';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      numeroDeXablaus: 0,
      textoDoFilter: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((numeroAnterior, _props) => ({
      numeroDeXablaus: numeroAnterior.numeroDeXablaus + 1
    }))

  }

  handleChange(event) {
    this.setState({textoDoFilter: event.target.value})
  }


  render() {
    return (<div>
      <div><input type="text"onChange={this.handleChange}/></div>
      <div>{colors.filter((color) => color.color === this.state.textoDoFilter).map((color) => {
        return (<div key={color.value}>{color.color}</div>)
      })}
      </div>
      <button onClick={this.handleClick}>Xablau {this.state.numeroDeXablaus}</button>
      </div>
    );
  }
  
}

export default App;

import React from 'react';
import './App.css';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      cliques: estadoAnterior.cliques + 1
    }));
    const btn = document.querySelector('button');
    console.log(this.state.cliques);
    if ((this.state.cliques + 1) % 2 === 0) {
      btn.classList.add('green');
    } else {
      btn.classList.remove('green');
    }
    

  }
  
  render() {
    return <button onClick={this.handleClick}>{this.state.cliques}</button>
  }
}

export default App;

import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();

    this.state = {
      dataHora: new Date(),
      showMessage: false,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({dataHora: new Date()})
    }, 1000);
  }

  componentDidUpdate() {
 
    

  }


  render() {
    return(<div>
    <span>{this.state.showMessage ? <p>Multiplo de 10!</p> : this.state.dataHora.toString()}</span>
    </div>)
  }
}

export default Clock;


// this.setState({
//   showMessage: false,
// },
// () => {
//   if (this.state.dataHora.getSeconds() % 10 === 0) {
//     this.setState({
//       showMessage: true,
//     })
//   };
// })
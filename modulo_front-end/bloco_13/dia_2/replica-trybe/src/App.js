import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import TrybePage from './TrybePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <TrybePage />
      </BrowserRouter>
    )
  }
}

export default App;

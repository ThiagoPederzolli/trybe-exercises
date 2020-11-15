import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Player from './components/Player';

class App extends Component {
  render() {
    // const { myCategories } = this.state;
    return (
      <div>
        <SideBar />
        <Player />
      </div>
    );
  }
}

export default App;

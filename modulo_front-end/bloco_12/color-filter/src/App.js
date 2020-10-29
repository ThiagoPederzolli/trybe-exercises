import './App.css';
import colors from './data';
import { Component } from 'react';

class App extends Component {
  render() {
    return (<div>
      {colors.map((color) => {
        return (<div key={color.value}>{color.color}</div>)
      })}
      </div>
    );
  }
  
}

export default App;

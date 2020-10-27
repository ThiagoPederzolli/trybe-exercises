import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

const compromissos = ['Estudar JS', 'Aprender React', 'Finalizar curso da Origamid']
const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div>
      {task('Exercício do Thiago')}
      <HelloWorld />
      <ul>
        {compromissos.map(compromisso => {
          return (
            <li>{compromisso}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;

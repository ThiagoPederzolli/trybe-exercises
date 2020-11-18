import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Clientes from './components/Clientes';
import Cadastro from './components/Cadastro';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/clientes" component={Clientes} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;

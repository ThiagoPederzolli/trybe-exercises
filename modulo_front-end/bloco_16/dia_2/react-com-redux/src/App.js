import React from 'react';
// o provider é o meio pelo qual disponibilizamos o Store
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>// componentes aqui</Provider>
      </div>
    );
  }
}

export default App;

import React from 'react';

import List from './List';
import InputsList from './InputsList';

class App extends React.Component {
  render() {
    return (
      <div>
        <InputsList />
        <List />
      </div>
    );
  }
}

export default App;

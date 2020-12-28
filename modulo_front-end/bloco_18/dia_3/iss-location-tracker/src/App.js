import React, { useContext } from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';
import ToggleMap from './components/ToggleMap';
import ISSContext from './context/ISSContext';

function App() {
  const { showMap } = useContext(ISSContext);
  return (
    <div className="App">
      <h1>
        Space Station <span className="yellow-font">Corn</span> Tracker
      </h1>
      <ToggleMap />
      {showMap && <ISSLocation />}
    </div>
  );
}

export default App;

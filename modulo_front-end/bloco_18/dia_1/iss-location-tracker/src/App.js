import React, { Component } from 'react';
import ISSLocation from './components/ISSLocation';
import './App.css';
import ISSContext from './context/ISSContext';
import getCurrencyISSLocation from './services/issAPI';

// import { fetchISSLocation } from './actions';

// {
//   Provider: setter,
//   Consumer: getElementError
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      isFetching: false,
      latitude: 10.5746,
      longitude: -65.4902,
    };
    this.fetchISSLocation = this.fetchISSLocation.bind(this);
    this.handleCurrentISSSuccess = this.handleCurrentISSSuccess.bind(this);
    this.handleCurrentISSFailure = this.handleCurrentISSFailure.bind(this);
  }
  // const contextValue = ;

  fetchISSLocation() {
    this.setState({ isFetching: true }, () => {
      getCurrencyISSLocation()
        .then(location => this.handleCurrentISSSuccess(location))
        .catch(error => this.handleCurrentISSFailure(error));
    });
  }

  handleCurrentISSSuccess(location) {
    const {
      iss_position: { latitude, longitude },
    } = location;
    this.setState({
      latitude,
      longitude,
    });
  }
  handleCurrentISSFailure(error) {
    const { message } = error;
    this.setState({
      error: message,
    });
  }

  render() {
    return (
      <div className="App">
        <ISSContext.Provider value={{ ...this.state }}>
          <h1>International Space Station Location Tracker</h1>
          <ISSLocation />
        </ISSContext.Provider>
      </div>
    );
  }
}

export default App;

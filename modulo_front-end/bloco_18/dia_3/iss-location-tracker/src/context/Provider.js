import React from 'react';

import ISSContext from './ISSContext';
import { getCurrentISSLocation } from '../services/issAPI';

class Provider extends React.Component {
  constructor() {
    super();

    this.state = {
      error: null,
      isFetching: false,
      latitude: -19.9410656,
      longitude: -43.9333033,
      showMap: true,
    };

    this.fetchISSLocation = this.fetchISSLocation.bind(this);
    this.handleCurrentISSError = this.handleCurrentISSError.bind(this);
    this.handleCurrentISSSuccess = this.handleCurrentISSSuccess.bind(this);
    this.handleToggleMap = this.handleToggleMap.bind(this);
  }

  fetchISSLocation() {
    this.setState({ isFetching: true }, () => {
      getCurrentISSLocation().then(
        this.handleCurrentISSSuccess, // tratamento do retorno da api
        this.handleCurrentISSError, // tratamento do retorno da api
      );
    });
  }

  handleCurrentISSSuccess(location) {
    const {
      iss_position: { latitude, longitude },
    } = location;

    this.setState({
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      isFetching: false,
    });
  }

  handleCurrentISSError(error) {
    this.setState({
      error: error.message,
      isFetching: false,
    });
  }

  handleToggleMap() {
    this.setState(({ showMap }) => ({ showMap: !showMap }));
  }

  render() {
    const { children } = this.props;
    return (
      <ISSContext.Provider
        value={{
          ...this.state,
          toggleMap: this.handleToggleMap,
          getCurrentISSLocation: this.fetchISSLocation,
        }}
      >
        {children}
      </ISSContext.Provider>
    );
  }
}

export default Provider;

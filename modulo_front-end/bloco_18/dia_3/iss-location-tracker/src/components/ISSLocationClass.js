import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Map from 'pigeon-maps';
import Overlay from 'pigeon-overlay';

import latitudeImg from '../assets/latitude.svg';
import longitudeImg from '../assets/longitude.svg';
import loadingImg from '../assets/loading.svg';

import ISSContext from '../context/ISSContext';

class ISSLocation extends Component {
  componentDidMount() {
    const { getCurrentISSLocation } = this.context;

    this.timer = setInterval(getCurrentISSLocation, 2000);
  }

  componentDidUpdate() {
    const now = new Date();
    document.title = now.toLocaleTimeString();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <ISSContext.Consumer>
        {({ error, isFetching, latitude, longitude }) => (
          <div>
            <div className="map">
              <Map
                center={[0, 0]}
                defaultWidth={450}
                height={450}
                minZoom={1.5}
                maxZoom={8}
                zoom={1.5}
              >
                {!isFetching && latitude && longitude && (
                  <Overlay anchor={[latitude, longitude]}>
                    <img
                      src="https://www.flaticon.com/svg/static/icons/svg/2619/2619499.svg"
                      width={24}
                      height={24}
                      alt="corn marker"
                    />
                  </Overlay>
                )}
              </Map>
            </div>
            {isFetching && (
              <img src={loadingImg} width={24} height={24} alt="loading" />
            )}
            {!isFetching && latitude && longitude && (
              <section className="lat-long-section">
                <div className="lat-long">
                  <img
                    className="lat-long-img"
                    src={latitudeImg}
                    width={24}
                    height={24}
                    alt="latitude"
                  />
                  <span>{latitude}</span>
                </div>
                <div className="lat-long">
                  <img
                    className="lat-long-img"
                    src={longitudeImg}
                    width={24}
                    height={24}
                    alt="longitude"
                  />
                  <span>{longitude}</span>
                </div>
              </section>
            )}
            {!isFetching && error}
          </div>
        )}
      </ISSContext.Consumer>
    );
  }
}

ISSLocation.contextType = ISSContext;

ISSLocation.propTypes = {
  error: PropTypes.string,
  getCurrentISSLocation: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

ISSLocation.defaultProps = {
  error: null,
  latitude: null,
  longitude: null,
};

export default ISSLocation;

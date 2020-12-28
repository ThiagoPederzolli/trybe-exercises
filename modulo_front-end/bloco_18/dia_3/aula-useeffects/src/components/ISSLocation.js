import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

import { fetchISSLocation } from '../actions';

class ISSLocation extends Component {
  componentDidMount() {
    const { getCurrentISSLocation } = this.props;

    this.timer = setInterval(getCurrentISSLocation, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { error, isFetching, latitude, longitude } = this.props;
    const isLocationPresent = latitude && longitude;

    return (
      <div>
        <div className="map">
          <Map
            center={[0, 0]}
            defaultWidth={700}
            height={450}
            minZoom={1}
            maxZoom={8}
            zoom={1}
          >
            {!isFetching && isLocationPresent && (
              <Marker anchor={[latitude, longitude]} />
            )}
          </Map>
        </div>
        {isFetching && 'Loading...'}
        {!isFetching &&
          isLocationPresent &&
          `Current ISS location: latitude = ${latitude}, longitude = ${longitude}`}
        {!isFetching && error}
      </div>
    );
  }
}

const mapStateToProps = ({
  issLocation: { error, isFetching, latitude, longitude },
}) => ({
  error,
  isFetching,
  latitude,
  longitude,
});

const mapDispatchToProps = dispatch => ({
  getCurrentISSLocation: () => dispatch(fetchISSLocation()),
});

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

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import PropTypes from 'prop-types';

import { fetchISSLocation } from '../actions';

class ISSLocation extends Component {
  componentDidMount() {
    const { getCurrentISSLocation } = this.props;

    getCurrentISSLocation();
  }
  render() {
    const { latitude, longitude } = this.props;
    const CENTER_OF_COORDINATES = 0;
    return (
      <div className="map">
        <Map
          center={[CENTER_OF_COORDINATES, CENTER_OF_COORDINATES]}
          defaultWidth={700}
          height={450}
          minZoom={1}
          maxZoom={8}
          zoom={1}
        >
          <Marker anchor={[latitude, longitude]} />
        </Map>
      </div>
    );
  }
}

const mapStateToProps = ({ issLocation: { latitude, longitude } }) => ({
  latitude,
  longitude,
});

const mapDispatchToProps = dispatch => ({
  getCurrentISSLocation: () => dispatch(fetchISSLocation()),
});

// const mapStateToProps = ({ issLocation: { latitude, longitude } }) => ({
//   latitude: state.issLocation.latitude,
//   longitude: state.issLocation.longitude,
// });

ISSLocation.propTypes = {
  getCurrentISSLocation: PropTypes.func.isRequired,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

ISSLocation.defaultProps = {
  latitude: null,
  longitude: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);

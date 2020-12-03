import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

// import { fetchISSLocation } from '../actions';
import ISSContext from '../context/ISSContext';

class ISSLocation extends Component {
  // componentDidMount() {
  //   const { getCurrentISSLocation } = this.props;

  //   this.timer = setInterval(getCurrentISSLocation, 2000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  render() {
    // const { isFetching, latitude, longitude } = this.props;
    // const isLocationPresent = latitude && longitude;
    // const CENTER_OF_COORDINATES = 0;
    return (
      <ISSContext.Consumer>
        {({ isFetching, latitude, longitude }) => (
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
                {!isFetching && latitude && longitude && (
                  <Marker anchor={[latitude, longitude]} />
                )}
              </Map>
            </div>
            {isFetching && 'Loading...'}
            {!isFetching &&
              latitude &&
              longitude &&
              `Current ISS location: latitude = ${latitude}. longitude = ${longitude}`}
          </div>
        )}
      </ISSContext.Consumer>
    );
  }
}

ISSContext.contextType = ISSContext;

// const mapStateToProps = ({
//   issLocation: { error, isFetching, latitude, longitude },
// }) => ({
//   error,
//   isFetching,
//   latitude,
//   longitude,
// });

// const mapDispatchToProps = dispatch => ({
//   getCurrentISSLocation: () => dispatch(fetchISSLocation()),
// });

// const mapStateToProps = ({ issLocation: { latitude, longitude } }) => ({
//   latitude: state.issLocation.latitude,
//   longitude: state.issLocation.longitude,
// });

// ISSLocation.propTypes = {
//   error: PropTypes.string,
//   isFetching: PropTypes.bool.isRequired,
//   getCurrentISSLocation: PropTypes.func.isRequired,
//   latitude: PropTypes.number,
//   longitude: PropTypes.number,
// };

// ISSLocation.defaultProps = {
//   error: null,
//   latitude: null,
//   longitude: null,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);
export default ISSLocation;

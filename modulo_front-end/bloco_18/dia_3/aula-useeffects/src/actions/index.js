import { getCurrentISSLocation } from '../services/issAPI';

export const RECEIVE_ISS_LOCATION_FAILURE = 'RECEIVE_ISS_LOCATION_FAILURE';
export const RECEIVE_ISS_LOCATION_SUCCESS = 'RECEIVE_ISS_LOCATION_SUCCESS';
export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';

const requestISSLocation = () => ({
  type: REQUEST_ISS_LOCATION,
});

const receiveISSLocationFailure = error => ({
  type: RECEIVE_ISS_LOCATION_FAILURE,
  error,
});

const receiveISSLocationSuccess = ({
  iss_position: { latitude, longitude },
}) => ({
  type: RECEIVE_ISS_LOCATION_SUCCESS,
  latitude: parseFloat(latitude),
  longitude: parseFloat(longitude),
});

export function fetchISSLocation() {
  return dispatch => {
    dispatch(requestISSLocation());

    return getCurrentISSLocation().then(
      location => dispatch(receiveISSLocationSuccess(location)),
      error => dispatch(receiveISSLocationFailure(error.message)),
    );
  };
}

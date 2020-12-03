import getCurrencyISSLocation from '../services/issAPI';

export const RECEIVE_ISS_LOCATION_SUCCESS = 'RECEIVE_ISS_LOCATION_SUCCESS';
export const RECEIVE_ISS_LOCATION_FAILURE = 'RECEIVE_ISS_LOCATION_FAILURE';
export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';

export const requestISSLocation = () => ({
  type: REQUEST_ISS_LOCATION,
});

const receiveISSLocationSuccess = (latitude, longitude) => ({
  type: RECEIVE_ISS_LOCATION_SUCCESS,
  latitude,
  longitude,
});

const receiveISSLocationFailure = error => ({
  type: RECEIVE_ISS_LOCATION_FAILURE,
  error,
});

export function fetchISSLocation() {
  return async dispatch => {
    try {
      dispatch(requestISSLocation());

      const {
        iss_position: { latitude, longitude },
      } = await getCurrencyISSLocation();
      dispatch(receiveISSLocationSuccess(Number(latitude), Number(longitude)));
    } catch (error) {
      dispatch(receiveISSLocationFailure(error.message));
    }
  };
}

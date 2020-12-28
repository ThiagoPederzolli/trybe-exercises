import {
  RECEIVE_ISS_LOCATION_FAILURE,
  RECEIVE_ISS_LOCATION_SUCCESS,
  REQUEST_ISS_LOCATION,
} from '../actions';

const INITIAL_ISS_LOCATION_STATE = {
  isFetching: false,
};

const issLocation = (state = INITIAL_ISS_LOCATION_STATE, action) => {
  console.log('received action:', action);

  switch (action.type) {
    case REQUEST_ISS_LOCATION:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_ISS_LOCATION_SUCCESS:
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
        isFetching: false,
      };
    case RECEIVE_ISS_LOCATION_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default issLocation;

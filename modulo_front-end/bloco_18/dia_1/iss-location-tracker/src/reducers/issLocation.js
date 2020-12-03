import {
  RECEIVE_ISS_LOCATION_SUCCESS,
  RECEIVE_ISS_LOCATION_FAILURE,
  REQUEST_ISS_LOCATION,
} from '../actions';
const INITIAL_STATE = {
  isFetching: false,
};
const issLocation = (state = INITIAL_STATE, action) => {
  console.log('received action: ', action);
  switch (action.type) {
    case REQUEST_ISS_LOCATION:
      return { ...state, isFetching: true };
    case RECEIVE_ISS_LOCATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        latitude: action.latitude,
        longitude: action.longitude,
      };
    case RECEIVE_ISS_LOCATION_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
};

export default issLocation;

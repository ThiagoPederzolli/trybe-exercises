import { RECEIVE_ISS_LOCATION_SUCCESS, REQUEST_ISS_LOCATION } from '../actions';
const INITIAL_STATE = {
  isFetching: false,
}
const issLocation = (state = INITIAL_STATE, action) => {
  console.log('action recebida: ', action)
  switch (action.type) {
    case RECEIVE_ISS_LOCATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        latitude: action.latitude,
        longitude: action.longitude,
      };
    case REQUEST_ISS_LOCATION:
      return {...state, isFetching: true}
    default:
      return state;
  }
};

export default issLocation;

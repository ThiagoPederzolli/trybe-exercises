import { CHANGE_SIGNAL } from './actionCreators';

const initialState = {
  signal: { color: 'red' },
};

function trafficReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { ...state, signal: { ...state.sginal, color: action.payload } };
    default:
      return state;
  }
}

export default trafficReducer;

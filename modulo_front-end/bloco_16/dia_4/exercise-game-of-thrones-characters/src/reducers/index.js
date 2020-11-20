import {
  REQUEST_CHARACTERS_INFO,
  RECEIVED_CHARACTER_INFO_SUCCESS,
  RECEIVED_CHARACTER_INFO_ERROR,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  char: '',
};

const charReduce = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CHARACTERS_INFO:
      return { ...state, isFetching: true };
    case RECEIVED_CHARACTER_INFO_SUCCESS:
      return { ...state, isFetching: false, char: action.char };
    case RECEIVED_CHARACTER_INFO_ERROR:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
};

export default charReduce;

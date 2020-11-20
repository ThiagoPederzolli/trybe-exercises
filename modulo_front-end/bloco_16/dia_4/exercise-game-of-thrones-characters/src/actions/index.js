import charAPI from '../services/charAPI';

export const REQUEST_CHARACTERS_INFO = 'REQUEST_CHARACTERS_INFO';
export const RECEIVED_CHARACTER_INFO_SUCCESS =
  'RECEIVED_CHARACTER_INFO_SUCCESS';
export const RECEIVED_CHARACTER_INFO_ERROR = 'RECEIVED_CHARACTER_INFO_ERROR';

const requestInfo = characterSearched => ({
  type: REQUEST_CHARACTERS_INFO,
  characterSearched,
});

const receivedInfoSuccess = char => ({
  type: RECEIVED_CHARACTER_INFO_SUCCESS,
  char,
});

const receivedInfoError = error => ({
  type: RECEIVED_CHARACTER_INFO_ERROR,
  error,
});

export function fetchChar(name) {
  return async dispatch => {
    try {
      dispatch(requestInfo(name));

      const char = await charAPI(name);
      dispatch(receivedInfoSuccess(char[0]));
    } catch (error) {
      dispatch(receivedInfoError(error.message));
    }
  };
}

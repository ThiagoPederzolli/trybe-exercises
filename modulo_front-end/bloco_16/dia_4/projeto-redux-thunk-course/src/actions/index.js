function getImage(json) {
  return { type: 'GET_IMAGE', payload: json.message };
}
function requestImage() {
  return { type: 'REQUEST_IMAGE' };
}

function failedRequest(error) {
  return { type: 'FAILED_REQUEST', payload: error };
}

// https://dog.ceo/api/breeds/image/random
export default function fetchDog() {
  return async dispatch => {
    try {
      dispatch(requestImage());

      const dogResponse = await fetch(
        'https://dog.ceo/api/breeds/image/random',
      );
      const dogJson = await dogResponse.json();

      dispatch(getImage(dogJson));
    } catch (error) {
      dispatch(failedRequest(error.message));
    }
  };
}

import getCurrencyISSLocation from '../services/issAPI'
// export const RECEIVE_ISS_LOCATION = 'RECEIVE_ISS_LOCATION';
export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';
export const RECEIVE_ISS_LOCATION_SUCCESS = 'RECEIVE_ISS_LOCATION_SUCCESS';
export const RECEIVE_ISS_LOCATION_ERROR = 'RECEIVE_ISS_LOCATION_ERROR';

// export const receiveISSLocation = () => ({
//   type: RECEIVE_ISS_LOCATION,
//   latitude: 22.2,
//   longitude: -65.8,  
// });

export const requestISSLocation  = () => ({
  type: REQUEST_ISS_LOCATION,
})

const receiveISSLocationSuccess = (latitude,longitude) => ({
  type: RECEIVE_ISS_LOCATION_SUCCESS,latitude,longitude,
})

// const receiveISSLocationError = (error) => ({
//   type: RECEIVE_ISS_LOCATION_ERROR, 
// })

export function fetchISSLocation() {
  return async (dispatch) => {
    try {
      dispatch(requestISSLocation())

      const {issPosition: { latitude, longitude}} = await getCurrencyISSLocation()
      dispatch(receiveISSLocationSuccess(latitude,longitude))
    } catch (error) {
      // dispatch(receiveISSLocationError(error.message))
    }

     
  }
}
import { combineReducers, createStore } from 'redux';
import trafficReducer from './TrafficReducer';
import carReducer from './carReducer';

const reducer = combineReducers({ trafficReducer, carReducer });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

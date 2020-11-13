import { combineReducers, createStore } from 'redux';
import listReducers from '../reducers';

const reducer = combineReducers({ listReducers });
const store = createStore(reducer);

export default store;

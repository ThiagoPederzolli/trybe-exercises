import { combineReducers, createStore } from 'redux';
import listReducer from '../reducers';

const rootReducer = combineReducers(listReducer);

const store = createStore(rootReducer);

export default store;

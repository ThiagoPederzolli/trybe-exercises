import { createStore, combineReducers } from 'redux';
import { loginReducer, clientReducer } from '../reducers';

const reducer = combineReducers({ loginReducer, clientReducer });

const store = createStore(reducer);

export default store;

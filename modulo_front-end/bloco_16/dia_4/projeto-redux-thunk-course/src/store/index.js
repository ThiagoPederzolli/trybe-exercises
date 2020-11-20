import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';
const store = createStore(combineReducers({ reducer }), applyMiddleware(thunk));

export default store;

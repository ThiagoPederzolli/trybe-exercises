import React from 'react';
import { createStore, combineReducers } from 'redux';
import reducer from '../reducers';

const rootReducer = combineReducers({ reducer });
const store = createStore(rootReducer);

export default store;

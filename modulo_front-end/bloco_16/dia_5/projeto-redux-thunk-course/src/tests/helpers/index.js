import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../reducers';

const createMockStore = initialState =>
  createStore(
    combineReducers({ reducer }),
    initialState,
    applyMiddleware(thunk),
  );

const renderWithRedux = (
  component,
  { initialState, store = createMockStore(initialState) } = {},
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

export default renderWithRedux;

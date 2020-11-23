import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {},
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('testing clicks', () => {
  beforeEach(cleanup);
  it('te page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique Aqui');
    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  it('testing if the initial text is 5', () => {
    const { queryByText } = renderWithRedux(<App />, {
      initialState: { clickReducer: { counter: 5 } },
    });

    expect(queryByText('5')).toBeInTheDocument();
  });
});

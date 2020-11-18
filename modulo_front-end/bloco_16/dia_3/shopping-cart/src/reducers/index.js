import React from 'react';
import { ADD_TO_CART } from '../actions';

const INITIAL_STATE = {
  cart: [],
  totalPrice: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { ...action.product }],
        totalPrice: state.totalPrice + action.product.price,
      };
    default:
      return state;
  }
};

export default reducer;

const initialStateLogin = {
  login: false,
};

const inititalStateNewClient = {
  clientes: [],
};

export function loginReducer(state = initialStateLogin, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, login: true };
    default:
      return state;
  }
}

export function clientReducer(state = inititalStateNewClient, action) {
  switch (action.type) {
    case 'NEW_CLIENT':
      return [...state.clientes, action.client];
    default:
      return state;
  }
}

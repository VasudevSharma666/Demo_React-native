import {token} from './state';
const initialstate = {
  tokenData: '',
};

export const loginReducer = (state = initialstate, action) => {
  switch (action.type) {
    case token: {
      return {...state, tokenData: action.data};
    }
    default: {
      return {...state};
    }
  }
};

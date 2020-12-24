import {token} from './type';
const initialstate = {
  tokenData: null,
};

export const loginReducer = (state = initialstate, action) => {
  switch (action.type) {
    case token: {
      return {...state, tokenData: action.data};
    }
    default: {
      return state;
    }
  }
};

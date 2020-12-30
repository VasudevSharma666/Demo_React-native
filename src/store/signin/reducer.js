import {user, logout} from './type';

const initialState = {
  userData: {
    name: '',
    email: '',
    password: '',
  },
};

export const SignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case user: {
      return {
        ...state,
        userData: action.data,
      };
    }
    case logout: {
      return {state: initialState};
    }
    default: {
      return {...state};
    }
  }
};

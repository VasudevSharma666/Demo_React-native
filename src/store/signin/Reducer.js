import {name, email, password, logout} from './type';

const initialState = {
  name: '',
  email: '',
  password: '',
};

export const SignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case name: {
      return {...state, name: action.data};
    }
    case email: {
      return {...state, email: action.data};
    }
    case password: {
      return {...state, password: action.data};
    }
    case logout: {
      return {state: initialState};
    }
    default: {
      return {...state};
    }
  }
};

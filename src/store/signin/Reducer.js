import {name, email, password} from './state';

const initialstate = {
  userData: {
    name: '',
    email: '',
    password: '',
  },
};

export const SigninReducer = (state = initialstate, action) => {
  switch (action.type) {
    case name: {
      return {...state, userData: {...userData, name: action.data}};
    }
    case email: {
      return {...state, userData: {...userData, email: action.data}};
    }
    case password: {
      return {...state, userData: {...userData, email: action.data}};
    }
    default: {
      return {...state};
    }
  }
};

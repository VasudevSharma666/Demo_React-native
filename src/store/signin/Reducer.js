import {name, email, password} from './state';

const initialstate = {
  name: '',
  email: '',
  password: '',
};

export const SigninReducer = (state = initialstate, action) => {
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
    default: {
      return {...state};
    }
  }
};

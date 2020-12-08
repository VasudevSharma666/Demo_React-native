import {name, email, password, logout} from './type';

const initialState = {
  userData: {
    name: '',
    email: '',
    password: '',
  },
};

export const SignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case name: {
      return {...state, userData: {...state.userData, name: action.data}};
    }
    case email: {
      return {...state, userData: {...state.userData, email: action.data}};
    }
    case password: {
      return {...state, userData: {...state.userData, password: action.data}};
    }
    case logout: {
      return {state: initialState};
    }
    default: {
      return {...state};
    }
  }
};

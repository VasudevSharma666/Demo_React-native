import {name, email, password, logout} from './type';

export const setName = (data) => {
  return {
    type: name,
    data: data,
  };
};

export const setEmail = (data) => {
  return {
    type: email,
    data: data,
  };
};

export const setpassword = (data) => {
  return {
    type: password,
    data: data,
  };
};

export const LogoutMethod = () => {
  return {
    type: logout,
  };
};

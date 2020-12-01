import {name, email, password} from './state';

const setName = (data) => {
  return {
    type: name,
    data: data,
  };
};

const setEmail = (data) => {
  return {
    type: email,
    data: data,
  };
};

const setpassword = (data) => {
  return {
    type: password,
    data: data,
  };
};

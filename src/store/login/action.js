import {email, password} from './state';

function emailChecker(data) {
  return {
    type: email,
    data: data,
  };
}

function passwordChecker(data) {
  return {
    type: password,
    data: data,
  };
}

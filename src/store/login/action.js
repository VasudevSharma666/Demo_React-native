import {token} from './state';

function tokenMethod(data) {
  return {
    type: token,
    data: data,
  };
}

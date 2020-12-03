import {token} from './state';

export const tokenMethod = (data) => {
  return {
    type: token,
    data: data,
  };
};

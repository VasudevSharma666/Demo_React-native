import {token} from './type';

export const tokenMethod = (data) => {
  return {
    type: token,
    data,
  };
};

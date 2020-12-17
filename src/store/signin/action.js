import {user, logout} from './type';

export const set_user = (data) => {
  return {
    type: user,
    data,
  };
};

export const LogoutMethod = () => {
  return {
    type: logout,
  };
};

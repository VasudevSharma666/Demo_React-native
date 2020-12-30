import {
  FilterMethod,
  HomePageMethod,
  ProfileMethod,
  findFriendsMethod,
} from './action';
import fetchCall from '../../utils/fetchCall';
import catchError from '../catchErr';

export const HomeApi = (url) => {
  return (dispatch) => {
    return fetchCall(url)
      .then((res) => dispatch(HomePageMethod(res)))
      .catch((err) => catchError(err));
  };
};

export const ProfileApi = (url) => {
  return (dispatch) => {
    return fetchCall(url)
      .then((res) => dispatch(ProfileMethod(res)))
      .catch((err) => catchError(err));
  };
};

export const FilterApi = (url) => {
  return (dispatch) => {
    return fetchCall(url)
      .then((res) => dispatch(FilterMethod(res)))
      .catch((err) => catchError(err));
  };
};

export const findFriendsApi = (url) => {
  return (dispatch) => {
    return fetchCall(url)
      .then((res) => dispatch(findFriendsMethod(res)))
      .catch((err) => catchError(err));
  };
};

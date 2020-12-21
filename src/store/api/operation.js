import {Alert} from 'react-native';

import {FilterMethod, HomePageMethod, ProfileMethod} from './action';
import fetchCall from '../../utils/fetchCall';

export const HomeApi = (url) => {
  return (dispatch) => {
    return fetchCall(url)
      .then((res) => dispatch(HomePageMethod(res)))
      .catch((err) => Alert.alert('Something is wrong') + err);
  };
};

export const ProfileApi = (url) => {
  return (dispatch) => {
    return fetchCall(url)
      .then((res) => dispatch(ProfileMethod(res)))
      .catch((err) => Alert.alert('Something is wrong') + err);
  };
};

export const FilterApi = (url) => {
  return (dispatch) => {
    return fetchCall(url)
      .then((res) => dispatch(FilterMethod(res)))
      .catch((err) => Alert.alert('Something is wrong') + err);
  };
};

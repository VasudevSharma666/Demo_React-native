import {Alert} from 'react-native';

import {FilterMethod, HomePageMethod, ProfileMethod} from './action';
import {BaseUrl} from '../../utils/Urls';

export const Api = (data, form) => {
  return (dispatch) => {
    return fetch(BaseUrl + data)
      .then((res) => res.json())
      .then((json) => {
        if (form == 'home') {
          dispatch(HomePageMethod(json));
        }
        if (form == 'profile') {
          dispatch(ProfileMethod(json));
        }
        if (form == 'filter') {
          dispatch(FilterMethod(json));
        }
      })
      .catch((err) => Alert.alert('someThing is unwanted' + err));
  };
};

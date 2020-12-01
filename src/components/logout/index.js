import React from 'react';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {token} from '../../store/login/state';
const index = () => {
  const dispatch = useDispatch();
  dispatch({type: token});
  return <Text>Logout</Text>;
};

export default index;

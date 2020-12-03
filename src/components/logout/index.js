import React from 'react';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {tokenMethod} from '../../store/login/action';
const index = () => {
  const dispatch = useDispatch();
  dispatch(tokenMethod(''));
  return <Text>Logout</Text>;
};

export default index;

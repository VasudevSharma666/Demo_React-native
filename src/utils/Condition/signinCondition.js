import React from 'react';
import {useDispatch} from 'react-redux';
import {name, email, password} from '../../store/signin/state';
const signinCondition = ({
  nameProps,
  emailProps,
  passwordProps,
  navigation,
}) => {
  const dispatch = useDispatch();
  dispatch({type: name, data: nameProps});
  dispatch({type: email, data: emailProps});
  dispatch({type: password, data: passwordProps});
  return navigation.navigate('Login');
};

export default signinCondition;

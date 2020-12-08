import React, {useReducer} from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './style';

import Common from '../commonComponents/startingBackground';
import HeaderOfNotLogin from '../commonComponents/unauthorizedComponentHeader';
import InputText from '../commonComponents/InputTextFiled';
import {tokenMethod} from '../../store/login/action';
import {reg} from '../../constants/emailChecker';

const initialState = {
  email: '',
  password: '',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'email': {
      return {...state, email: action.value};
    }
    case 'password': {
      return {...state, password: action.value};
    }
  }
};

const index = ({navigation}) => {
  const signinData = useSelector((state) => state.signin);
  const dispatchProps = useDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);
  const Dispatch = (value, type) => {
    if (type == 'email') {
      dispatch({type: 'email', value: value});
    } else {
      dispatch({type: 'password', value: value});
    }
  };

  const Checker = () => {
    if (state.email.trim() == '' || reg.test(state.email) === false) {
      return Alert.alert('enter email ');
    } else if (state.password.trim() == '') {
      return Alert.alert('enter password ');
    } else {
      if (
        state.email == signinData.email &&
        state.password == signinData.password
      ) {
        dispatchProps(tokenMethod('token'));
        return navigation.navigate('Home');
      } else {
        return Alert.alert('Invalid email and password');
      }
    }
  };
  return (
    <>
      <Common />

      <View style={styles.header}>
        <HeaderOfNotLogin value="Login" navigation={navigation} />
      </View>
      <View style={styles.Username}>
        <InputText
          Icon="mail"
          Title="email"
          props={state.email}
          handleState={(value) => Dispatch(value, (type = 'email'))}
        />
      </View>
      <View style={styles.Password}>
        <InputText
          Icon="form-textbox-password"
          Title="password"
          show={true}
          props={state.password}
          handleState={(value) => Dispatch(value, (type = 'password'))}
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={Checker}>
          <View style={styles.buttonSingIn}>
            <Text style={styles.buttontext}>Log In</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default index;

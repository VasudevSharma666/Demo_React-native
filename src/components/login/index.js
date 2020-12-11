import React, {useReducer} from 'react';
import {View, Text, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {styles} from './style';
import Common from '../commonComponents/startingBackground';
import HeaderOfNotLogin from '../commonComponents/unauthorizedComponentHeader';
import InputText from '../commonComponents/InputTextFiled';
import {tokenMethod} from '../../store/login/action';
import {reg} from '../../constants/emailChecker';
import BackgroundImag from '../commonComponents/BackgroundImag';

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
      return ToastAndroid.showWithGravityAndOffset(
        `Enter email `,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        10,
        50,
      );
    } else if (state.password.trim() == '') {
      return ToastAndroid.showWithGravityAndOffset(
        `Enter password`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        10,
        50,
      );
    } else {
      if (
        state.email == signinData.userData.email &&
        state.password == signinData.userData.password
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
      <BackgroundImag />
      <HeaderOfNotLogin value="Login" navigation={navigation} />
      <Common />
      <KeyboardAwareScrollView style={{flex: 1, top: '10%'}}>
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
            Icon="lock"
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
      </KeyboardAwareScrollView>
    </>
  );
};
export default index;

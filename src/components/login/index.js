import React, {useState} from 'react';
import {View, Alert, ToastAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Common from '../commonComponents/startingBackground';
import HeaderOfNotLogin from '../commonComponents/unauthorizedComponentHeader';
import InputText from '../commonComponents/InputTextFiled';
import {tokenMethod} from '../../store/login/action';
import {reg} from '../../constants/emailChecker';
import BackgroundImag from '../commonComponents/BackgroundImag';
import Button from '../commonComponents/Button';
import mainStyle from '../commonComponents/mainStyle';
import Toaster from '../commonComponents/Toaster';

const index = ({navigation}) => {
  const signinData = useSelector((state) => state.signin);
  const dispatchProps = useDispatch();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const Dispatch = (type, value) => {
    setLoginData({
      ...loginData,
      [type]: value,
    });
  };

  const Checker = () => {
    if (loginData.email.trim() == '' || reg.test(loginData.email) === false) {
      return Toaster('please enter email properly');
    } else if (loginData.password.trim() == '') {
      return Toaster('Enter Password');
    } else {
      if (
        loginData.email == signinData.userData.email &&
        loginData.password == signinData.userData.password
      ) {
        dispatchProps(tokenMethod('token'));
        return Toaster('successful');
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
      <KeyboardAwareScrollView style={mainStyle.KeyBoardScrollView}>
        <View style={mainStyle.input}>
          <InputText
            Icon="mail"
            Title="email"
            value={loginData.email}
            handleState={(value) => Dispatch('email', value)}
          />
        </View>
        <View style={mainStyle.input}>
          <InputText
            Icon="lock"
            Title="password"
            hide={true}
            value={loginData.Password}
            handleState={(value) => Dispatch('password', value)}
          />
        </View>
        <Button
          value="Log-in"
          style={mainStyle.unauthButton}
          onPress={() => Checker()}
        />
      </KeyboardAwareScrollView>
    </>
  );
};
export default index;

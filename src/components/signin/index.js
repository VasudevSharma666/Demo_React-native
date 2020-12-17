import React, {useState} from 'react';
import {Text, View, Linking, ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Common from '../commonComponents/startingBackground';
import InputText from '../commonComponents/InputTextFiled';
import Button from '../commonComponents/Button';
import UnauthorizedComponentHeader from '../commonComponents/unauthorizedComponentHeader';
import {styles} from './style';
import {set_user} from '../../store/signin/action';
import {reg} from '../../constants/emailChecker';
import BackgroundImag from '../commonComponents/BackgroundImag';
import mainStyle from '../commonComponents/mainStyle';
import {facebookIcon, googleIcon} from '../../constants/color';
import Toaster from '../commonComponents/Toaster';

const Index = ({navigation}) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatchProps = useDispatch();

  const Dispatch = (type, value) => {
    setUserData({
      ...userData,
      [type]: value,
    });
  };

  const Checker = () => {
    if (userData.name.trim() == '') {
      return Toaster('Enter name');
    } else if (
      userData.email.trim() == '' ||
      reg.test(userData.email) === false
    ) {
      return Toaster('please enter email properly');
    } else if (userData.password.trim() == '') {
      return Toaster('Enter password');
    } else {
      dispatchProps(set_user(userData));
      return navigation.navigate('Login');
    }
  };

  return (
    <>
      <BackgroundImag />
      <UnauthorizedComponentHeader value="SignIn" navigation={navigation} />
      <Common />
      <KeyboardAwareScrollView
        style={[mainStyle.KeyBoardScrollView, styles.keyBoard]}>
        <View style={mainStyle.input}>
          <InputText
            Title="name"
            Icon="user"
            value={userData.name}
            handleState={(value) => Dispatch('name', value)}
          />
        </View>
        <View style={mainStyle.input}>
          <InputText
            Title="email"
            Icon="mail"
            value={userData.email}
            handleState={(value) => Dispatch('email', value)}
          />
        </View>
        <View style={mainStyle.input}>
          <InputText
            Title="password"
            Icon="lock"
            hide={true}
            value={userData.password}
            handleState={(value) => Dispatch('password', value)}
          />
        </View>
        <Button
          value="SignUp"
          style={mainStyle.unauthButton}
          onPress={() => Checker()}
        />
        <View style={styles.LinkButton}>
          <View style={styles.facebook}>
            <Button
              value="Facebook"
              style={{backgroundColor: facebookIcon}}
              onPress={() => Linking.openURL('https://www.facebook.com/')}
            />
          </View>
          <Text style={styles.OR}>OR</Text>
          <View style={styles.Google}>
            <Button
              value="Google"
              style={{backgroundColor: googleIcon}}
              onPress={() => Linking.openURL('https://www.google.com/')}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Index;

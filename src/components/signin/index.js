import React, {useState} from 'react';
import {Text, View, Linking} from 'react-native';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Animation from 'react-native-animatable';

import InputText from '../commonComponents/InputTextFiled';
import Button from '../commonComponents/Button';
import {styles} from './style';
import {set_user} from '../../store/signin/action';
import {reg} from '../../constants/emailChecker';
import mainStyle from '../commonComponents/mainStyle';
import color from '../../constants/color';
import Toaster from '../commonComponents/Toaster';
import Layout from '../commonComponents/unauthContainer';
import JsonContainer from './jsonContainer';

const Index = ({navigation}) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatchRedux = useDispatch();

  const dispatch = (type, value) => {
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
      dispatchRedux(set_user(userData));
      return navigation.navigate('Login');
    }
  };

  return (
    <Layout headerName="signup" navigation={navigation}>
      <KeyboardAwareScrollView
        style={[mainStyle.KeyBoardScrollView, styles.keyBoard]}>
        <Animation.View animation="slideInRight">
          {JsonContainer.input.map((items) => (
            <View style={mainStyle.input} key={items.id}>
              <InputText
                title={items.title}
                icon={items.Icon}
                value={userData[items.title]}
                hide={items.hide}
                handleState={(value) => dispatch(items.title, value)}
              />
            </View>
          ))}
          <Button
            value="SignUp"
            style={mainStyle.unauthButton}
            onPress={() => Checker()}
          />
          <View style={styles.LinkButton}>
            <View style={styles.facebook}>
              <Button
                value="Facebook"
                style={{backgroundColor: color.facebookIcon}}
                onPress={() => Linking.openURL('https://www.facebook.com/')}
              />
            </View>
            <Text style={styles.OR}>OR</Text>
            <View style={styles.Google}>
              <Button
                value="Google"
                style={{backgroundColor: color.googleIcon}}
                onPress={() => Linking.openURL('https://www.google.com/')}
              />
            </View>
          </View>
        </Animation.View>
      </KeyboardAwareScrollView>
    </Layout>
  );
};

export default Index;

import React, {useReducer} from 'react';
import {Text, View, TouchableOpacity, Alert, ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Common from '../commonComponents/startingBackground';
import InputText from '../commonComponents/InputTextFiled';
import Button from '../commonComponents/Button';
import UnauthorizedComponentHeader from '../commonComponents/unauthorizedComponentHeader';
import {styles} from './style';
import {setName, setEmail, setpassword} from '../../store/signin/action';
import {reg} from '../../constants/emailChecker';
import BackgroundImag from '../commonComponents/BackgroundImag';
import {facebookIcon, googleIcon} from '../../constants/color';

const initialState = {
  name: '',
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
    case 'name': {
      return {...state, name: action.value};
    }
  }
};

const Index = ({navigation}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatchProps = useDispatch();

  const Dispatch = (value, type) => {
    if (type == 'name') {
      dispatch({type: 'name', value: value});
    } else if (type == 'email') {
      dispatch({type: 'email', value: value});
    } else {
      dispatch({type: 'password', value: value});
    }
  };

  const Checker = () => {
    if (state.name.trim() == '') {
      return ToastAndroid.showWithGravityAndOffset(
        `Enter name first`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        10,
        50,
      );
    } else if (state.email.trim() == '' || reg.test(state.email) === false) {
      return ToastAndroid.showWithGravityAndOffset(
        `Enter email`,
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
      dispatchProps(setName(state.name));
      dispatchProps(setEmail(state.email));
      dispatchProps(setpassword(state.password));
      return navigation.navigate('Login');
    }
  };

  return (
    <>
      <BackgroundImag />
      <UnauthorizedComponentHeader value="SignIn" navigation={navigation} />

      <Common />
      <KeyboardAwareScrollView style={{flex: 1}}>
        <View style={styles.name}>
          <InputText
            Title="name"
            Icon="user"
            handleState={(value) => Dispatch(value, (type = 'name'))}
          />
        </View>
        <View style={styles.email}>
          <InputText
            Title="email"
            Icon="mail"
            handleState={(value) => Dispatch(value, (type = 'email'))}
          />
        </View>
        <View style={styles.firstPassword}>
          <InputText
            Title="password"
            Icon="lock"
            show={true}
            handleState={(value) => Dispatch(value, (type = 'password'))}
          />
        </View>

        <View style={styles.SignIn}>
          <TouchableOpacity onPress={Checker}>
            <View style={styles.buttonSingIn}>
              <Text style={styles.buttontext}>SignIn</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={styles.facebook}>
            <Button
              value="Facebook"
              colorBody={facebookIcon}
              url="https://www.facebook.com/"
            />
          </View>
          <Text style={styles.OR}>OR</Text>
          <View style={styles.Google}>
            <Button
              value="Google"
              colorBody={googleIcon}
              url="https://www.google.com/"
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Index;

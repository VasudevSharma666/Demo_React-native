import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import InputText from '../commonComponents/InputTextFiled';
import {tokenMethod} from '../../store/login/action';
import {reg} from '../../constants/emailChecker';
import Button from '../commonComponents/Button';
import mainStyle from '../commonComponents/mainStyle';
import Toaster from '../commonComponents/Toaster';
import Logout from '../commonComponents/unauthContainer';
import jsonContainer from './jsonContainer';

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
        Toaster('successful');
        return navigation.navigate('Home');
      } else {
        return Alert.alert('Invalid email and password');
      }
    }
  };
  return (
    <Logout HeaderName="Login" navigation={navigation}>
      <KeyboardAwareScrollView style={mainStyle.KeyBoardScrollView}>
        {jsonContainer.input.map((items) => (
          <View style={mainStyle.input} key={items.id}>
            <InputText
              Icon={items.Icon}
              Title={items.title}
              hide={items.hide}
              value={loginData[items.title]}
              handleState={(value) => Dispatch(items.title, value)}
            />
          </View>
        ))}
        <Button
          value="Log-in"
          style={mainStyle.unauthButton}
          onPress={() => Checker()}
        />
      </KeyboardAwareScrollView>
    </Logout>
  );
};

export default index;

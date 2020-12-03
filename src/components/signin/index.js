import React, {useReducer} from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import {useDispatch} from 'react-redux';

import Common from '../commonComponents/startingBackground';
import InputText from '../commonComponents/InputTextFiled';
import Button from '../commonComponents/Button';
import UnauthorizedComponentHeader from '../commonComponents/unauthorizedComponentHeader';
import {styles} from './style';
import {setName, setEmail, setpassword} from '../../store/signin/action';

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
      return Alert.alert('enter name first');
    } else if (
      state.email.trim() == '' &&
      state.email.match('@') &&
      state.email.match('.com')
    ) {
      return Alert.alert('enter email ');
    } else if (state.password.trim() == '') {
      return Alert.alert('enter password ');
    } else {
      dispatchProps(setName(state.name));
      dispatchProps(setEmail(state.email));
      dispatchProps(setpassword(state.password));
      return navigation.navigate('Login');
    }
  };

  return (
    <>
      <Common />
      <View style={styles.header}>
        <UnauthorizedComponentHeader value="SignIn" navigation={navigation} />
      </View>
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

      <View style={styles.facebook}>
        <Button
          value="Facebook"
          colorBody="#0000FF"
          url="https://www.facebook.com/"
        />
      </View>
      <Text style={styles.OR}>OR</Text>
      <View style={styles.Google}>
        <Button
          value="Google"
          colorBody="#dd5e08"
          url="https://www.google.com/"
        />
      </View>
    </>
  );
};
export default Index;

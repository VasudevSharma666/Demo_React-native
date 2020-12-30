import React from 'react';
import * as Animatable from 'react-native-animatable';

import {styles} from './style';
import Layout from '../commonComponents/unauthContainer';
import Button from '../commonComponents/Button';

const index = ({navigation}) => (
  <Layout>
    <Animatable.View animation="slideInRight">
      <Button
        value="SignUp"
        style={[styles.common]}
        onPress={() => navigation.navigate('SignIn')}
      />
      <Button
        value="Login"
        style={[styles.common]}
        onPress={() => navigation.navigate('Login')}
      />
    </Animatable.View>
  </Layout>
);

export default index;

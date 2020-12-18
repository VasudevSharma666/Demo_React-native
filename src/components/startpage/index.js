import React from 'react';

import {styles} from './style';
import Layout from '../commonComponents/unauthContainer';
import Button from '../commonComponents/Button';

const index = ({navigation}) => (
  <Layout>
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
  </Layout>
);

export default index;

import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Common from '../commonComponents/startingBackground';
import {styles} from './style';

const index = ({navigation}) => (
  <>
    <Common />
    <View style={styles.SingIn}>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <View style={styles.buttonSingIn}>
          <Text style={styles.buttontext}>Sign In</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style={styles.Login}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View style={styles.buttonSingIn}>
          <Text style={styles.buttontext}>Log In</Text>
        </View>
      </TouchableOpacity>
    </View>
  </>
);

export default index;

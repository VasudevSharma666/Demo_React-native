import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Common from '../commonComponents/startingBackground';
//import {styles} from './Style'
const index = ({navigation}) => {
  return (
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
};

const styles = StyleSheet.create({
  buttonSingIn: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#FF0000',
  },
  buttontext: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  SingIn: {
    position: 'absolute',
    bottom: 200,
    alignSelf: 'center',
    width: 250,
  },
  Login: {
    position: 'absolute',
    bottom: 110,
    alignSelf: 'center',
    width: 250,
  },
});

export default index;

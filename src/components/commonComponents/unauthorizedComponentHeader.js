import React from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

import {basicComponentsOne, basicComponentsTwo} from '../../constants/color';

const HeaderOfNotLogin = ({navigation, value}) => (
  <View style={styles.Header}>
    <Text style={styles.Text1}>{value}</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Icon name="left" size={30} color="white" style={{left: '3%'}} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  Header: {
    height: 50,
    backgroundColor: basicComponentsOne,
    width: '100%',
    justifyContent: 'center',
    elevation: 4,
  },
  Text1: {
    position: 'absolute',
    top: 10,
    right: 20,
    color: basicComponentsTwo,
    fontWeight: 'bold',
  },
});

export default HeaderOfNotLogin;

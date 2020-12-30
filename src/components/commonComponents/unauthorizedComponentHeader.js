import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';

import color from '../../constants/color';

const HeaderOfNotLogin = ({navigation, value}) => (
  <Animatable.View animation="slideInRight" style={styles.Header}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Icon name="left" style={styles.IconCss} />
    </TouchableOpacity>
    <Text style={styles.Text1}>{value}</Text>
  </Animatable.View>
);

const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: color.basicComponentsOne,
    width: '100%',
    elevation: 2,
    alignItems: 'center',
  },
  Text1: {
    color: color.basicComponentsTwo,
    fontWeight: 'bold',
    marginRight: 20,
  },
  IconCss: {
    marginLeft: 10,
    fontSize: 30,
    color: color.basicComponentsTwo,
  },
});

export default HeaderOfNotLogin;

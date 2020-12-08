import React from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

const HeaderOfNotLogin = ({navigation, value}) => (
  <View style={styles.Header}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Icon name="left" size={30} color="white" />
    </TouchableOpacity>
    <Text style={styles.Text1}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  Header: {
    flex: 1,
    backgroundColor: 'transparent',
    width: '100%',
    height: 20,
  },
  Text1: {
    position: 'absolute',
    top: 10,
    right: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HeaderOfNotLogin;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../commonComponents/authenticComponentHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../commonComponents/Button';
import {ScrollView} from 'react-native-gesture-handler';
const index = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1}}>
        <Header Title="Profile" navigation={navigation} page="Home" />
        <View style={styles.ProfileImag}>
          <Icon name="user" size={100} color="red" />
        </View>
        <Text style={styles.name}>Melisa</Text>
        <View style={styles.Icon}>
          <ScrollView horizontal>
            <Button type="facebook" radius={60} colorBody="white" height={40} />
            <Text> </Text>
            <Button type="twitter" radius={60} colorBody="white" height={40} />
            <Text> </Text>
            <Button type="google" radius={60} colorBody="white" height={40} />
            <Text> </Text>
            <Button type="Linkedin" radius={60} colorBody="white" height={40} />
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  ProfileImag: {
    top: 20,
    left: 20,
    backgroundColor: 'gray',
    width: 100,
    height: 100,
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 2,
    padding: '0.5%',
  },
  name: {
    top: 23,
    left: 30,
    fontSize: 25,
    fontWeight: 'bold',
  },
  Icon: {
    top: 28,
    left: 15,
  },
});
export default index;

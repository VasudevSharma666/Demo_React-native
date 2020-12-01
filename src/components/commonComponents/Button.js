import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Facebook from 'react-native-vector-icons/EvilIcons';
import Twitter from 'react-native-vector-icons/AntDesign';
import Google from 'react-native-vector-icons/Entypo';
const Button = ({
  value,
  navigation,
  page = null,
  colorBody = '#FF0000',
  radius = 8,
  type,
  height,
}) => {
  const IconeType = () => {
    switch (type) {
      case 'facebook': {
        return (
          <>
            <Facebook name="sc-facebook" color="red" size={25} />
          </>
        );
      }
      case 'twitter': {
        return (
          <>
            <Twitter name="twitter" color="red" size={25} />
          </>
        );
      }
      case 'google': {
        return (
          <>
            <Google name="google-" color="red" size={25} />
          </>
        );
      }
      case 'Linkedin': {
        return (
          <>
            <Google name="linkedin" color="red" size={22} />
          </>
        );
      }
      default: {
        return <></>;
      }
    }
  };
  return (
    <TouchableOpacity
      onPress={() => {
        page != null
          ? navigation.navigate(page)
          : Alert.alert('Click On ' + value);
      }}>
      <View
        style={{
          backgroundColor: colorBody,
          borderRadius: radius,
          paddingVertical: 14,
          paddingHorizontal: 10,
          height: height,
        }}>
        <IconeType type={type} />
        <Text style={styles.buttontext}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttontext: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Button;

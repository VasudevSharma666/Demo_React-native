import React from 'react';
import {StyleSheet, View, Text, Alert, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Facebook from 'react-native-vector-icons/EvilIcons';
import Twitter from 'react-native-vector-icons/AntDesign';
import Google from 'react-native-vector-icons/Entypo';
import Alerting from 'react-native-vector-icons/Foundation';
import ShieldIcon from 'react-native-vector-icons/FontAwesome';

const Button = ({
  opacity = 100,
  value,
  navigation,
  page = null,
  colorBody = '#FF0000',
  colorText = 'white',
  radius = 8,
  type,
  height,
  url = null,
}) => {
  const IconType = () => {
    switch (type) {
      case 'facebook': {
        return <Facebook name="sc-facebook" color="red" size={25} />;
      }
      case 'twitter': {
        return <Twitter name="twitter" color="red" size={25} />;
      }
      case 'google': {
        return <Google name="google-" color="red" size={25} />;
      }
      case 'Linkedin': {
        return <Google name="linkedin" color="red" size={22} />;
      }
      case 'Saved': {
        return <Twitter name="heart" color="red" size={15} />;
      }
      case 'Alert': {
        return <Alerting name="alert" color="red" size={18} />;
      }
      case 'shield': {
        return <ShieldIcon name="shield" color="green" size={18} />;
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
          : url != null
          ? Linking.openURL(url)
          : Alert.alert('Click On ' + value);
      }}>
      <View
        style={{
          backgroundColor: colorBody,
          borderRadius: radius,
          paddingVertical: 14,
          paddingHorizontal: 10,
          height: height,
          opacity: opacity,
        }}>
        <IconType type={type} />
        <Text style={[styles.buttontext, {color: colorText}]}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttontext: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Button;

import React from 'react';
import {StyleSheet, View, Text, Linking, ToastAndroid} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Facebook from 'react-native-vector-icons/EvilIcons';
import Twitter from 'react-native-vector-icons/AntDesign';
import Google from 'react-native-vector-icons/Entypo';
import Alerting from 'react-native-vector-icons/Foundation';
import ShieldIcon from 'react-native-vector-icons/FontAwesome';

import {basicComponentsOne, basicComponentsTwo} from '../../constants/color';

const Button = ({
  onPress,
  style,
  value,
  colorText = basicComponentsTwo,
  type,
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
        return (
          <Twitter
            name="heart"
            color="red"
            size={15}
            style={{alignSelf: 'center'}}
          />
        );
      }
      case 'Alert': {
        return (
          <Alerting
            name="alert"
            color="red"
            size={18}
            style={{alignSelf: 'center'}}
          />
        );
      }
      case 'shield': {
        return (
          <ShieldIcon
            name="shield"
            color="green"
            size={18}
            style={{alignSelf: 'center'}}
          />
        );
      }
      case 'filter': {
        return <Twitter name="filter" size={18} color="red" />;
      }
      case 'sort': {
        return <ShieldIcon name="sort-amount-asc" size={18} color="red" />;
      }
      case 'reset': {
        return <Twitter name="retweet" size={18} color="red" />;
      }
      case 'backScroll': {
        return (
          <Twitter
            name="caretup"
            size={20}
            color="white"
            style={{alignSelf: 'center', justifyContent: 'center'}}
          />
        );
      }
      default: {
        return <></>;
      }
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.ButtonStyle, style]}>
        <IconType type={type} />
        <Text style={[styles.buttonText, {color: colorText}]}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ButtonStyle: {
    flexDirection: 'column',
    backgroundColor: basicComponentsOne,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    opacity: 100,
  },
});

export default Button;

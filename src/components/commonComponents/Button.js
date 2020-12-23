import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Facebook from 'react-native-vector-icons/EvilIcons';
import Twitter from 'react-native-vector-icons/AntDesign';
import Google from 'react-native-vector-icons/Entypo';
import Alerting from 'react-native-vector-icons/Foundation';
import ShieldIcon from 'react-native-vector-icons/FontAwesome';

import color from '../../constants/color';
import mainStyle from './mainStyle';

const Button = ({
  onPress,
  style,
  value,
  colorText = color.basicComponentsTwo,
  type,
}) => {
  const IconType = () => {
    switch (type) {
      case 'facebook': {
        return <Facebook name="sc-facebook" style={mainStyle.IconsCss} />;
      }
      case 'twitter': {
        return <Twitter name="twitter" style={mainStyle.IconsCss} />;
      }
      case 'google': {
        return <Google name="google-" style={mainStyle.IconsCss} />;
      }
      case 'Linkedin': {
        return <Google name="linkedin" style={mainStyle.IconsCss} />;
      }
      case 'Saved': {
        return (
          <Twitter
            name="heart"
            style={[mainStyle.IconsCss, styles.CenterIcon]}
          />
        );
      }
      case 'Alert': {
        return (
          <Alerting
            name="alert"
            style={[mainStyle.IconsCss, styles.CenterIcon]}
          />
        );
      }
      case 'shield': {
        return (
          <ShieldIcon
            name="shield"
            style={[
              mainStyle.IconsCss,
              styles.CenterIcon,
              styles.GreenColorIcon,
            ]}
          />
        );
      }
      case 'Filter': {
        return <Twitter name="filter" style={mainStyle.IconsCss} />;
      }
      case 'Sort': {
        return <ShieldIcon name="sort-amount-asc" style={mainStyle.IconsCss} />;
      }
      case 'Reset': {
        return <Twitter name="retweet" style={mainStyle.IconsCss} />;
      }
      case 'backScroll': {
        return (
          <Twitter
            name="caretup"
            style={[mainStyle.IconsCss, styles.CenterIcon, styles.arrowIcon]}
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
    backgroundColor: color.basicComponentsOne,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    opacity: 100,
  },
  CenterIcon: {
    alignSelf: 'center',
  },
  GreenColorIcon: {
    color: 'green',
  },
  arrowIcon: {
    justifyContent: 'center',
    color: color.basicComponentsTwo,
  },
});

export default Button;

import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import IconImport from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';

import color from '../../constants/color';

const TagCard = ({textData, icon, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.Container}>
    <Animatable.View animation="slideInRight" style={styles.tag}>
      <IconImport name={icon} size={30} color={color.basicComponentsOne} />
      <Text>{textData}</Text>
    </Animatable.View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  tag: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 80,
    borderTopColor: color.basicComponentsTwo,
    backgroundColor: color.basicComponentsTwo,
    borderRadius: 6,
    borderColor: color.TextColor,
    borderWidth: 0.2,
  },
  Container: {
    marginLeft: 5,
  },
});

export default TagCard;

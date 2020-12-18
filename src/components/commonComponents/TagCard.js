import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import IconImport from 'react-native-vector-icons/AntDesign';

import {
  basicComponentsOne,
  basicComponentsTwo,
  TextColor,
} from '../../constants/color';

const TagCard = ({TextData, Icon, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.Container}>
    <View style={styles.tag}>
      <IconImport name={Icon} size={30} color={basicComponentsOne} />
      <Text>{TextData}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  tag: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 80,
    borderTopColor: basicComponentsTwo,
    backgroundColor: basicComponentsTwo,
    borderRadius: 6,
    borderColor: TextColor,
    borderWidth: 0.2,
  },
  Container: {
    marginLeft: 5,
  },
});

export default TagCard;

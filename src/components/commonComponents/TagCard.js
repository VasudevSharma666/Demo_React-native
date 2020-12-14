import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import IconImport from 'react-native-vector-icons/AntDesign';

import {
  basicComponentsOne,
  basicComponentsTwo,
  TextColor,
} from '../../constants/color';

const TagCard = ({TextData, Icon, navigation, page = null}) => (
  <TouchableOpacity
    onPress={() =>
      page != null ? navigation.navigate(page) : Alert.alert(TextData)
    }>
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
});

export default TagCard;

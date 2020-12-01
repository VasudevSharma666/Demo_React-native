import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import IconImport from 'react-native-vector-icons/AntDesign';
const TagCard = ({TextData, Icon}) => {
  return (
    <>
      <TouchableOpacity>
        <View style={styles.tag}>
          <IconImport name={Icon} size={40} color="red" />
          <Text>{TextData}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  tag: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 80,
    borderTopColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    backgroundColor: 'white',
    borderRadius: 6,
    borderColor: 'black',
    borderWidth: 0.2,
  },
});

export default TagCard;

import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Search from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';

import color from '../../constants/color';

const SearchBox = ({value, handlerState, style}) => (
  <View style={[styles.Container, style]}>
    <Animatable.View animation="slideInRight" style={styles.Search}>
      <TextInput
        placeholder="What are you looking for..."
        placeholderTextColor={color.TextColor}
        value={value}
        onChangeText={(val) => handlerState(val)}
        style={styles.InputBox}
        autoCapitalize="none"
      />
      <Search name="search1" size={20} />
    </Animatable.View>
  </View>
);

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    backgroundColor: color.basicComponentsOne,
  },
  Search: {
    flexDirection: 'row',
    backgroundColor: color.basicComponentsTwo,
    borderRadius: 10,
    alignItems: 'center',
  },

  InputBox: {
    width: '90%',
  },
});

export default SearchBox;

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Search from 'react-native-vector-icons/AntDesign';

import {
  basicComponentsTwo,
  TextColor,
  basicComponentsOne,
} from '../../constants/color';

const SearchBox = ({value, handlerState, style}) => (
  <View style={[styles.Container, style]}>
    <View style={styles.Search}>
      <TextInput
        placeholder="What are you looking for..."
        placeholderTextColor={TextColor}
        value={value}
        onChangeText={(val) => handlerState(val)}
        style={styles.InputBox}
        autoCapitalize="none"
      />
      <Search name="search1" size={20} style={styles.searchIcon} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    backgroundColor: basicComponentsOne,
  },
  Search: {
    flexDirection: 'row',
    backgroundColor: basicComponentsTwo,
    borderRadius: 10,
    alignItems: 'center',
  },
  searchIcon: {
    left: 20,
  },
  InputBox: {
    width: 200,
  },
});

export default SearchBox;

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Search from 'react-native-vector-icons/AntDesign';

const SearchBox = ({backgroundColor = 'red', value, handlerState}) => (
  <View style={{backgroundColor: backgroundColor, width: '100%'}}>
    <View style={styles.Search}>
      <TextInput
        placeholder="What are you looking for..."
        placeholderTextColor="#000000"
        // value={value}
        // onChangeText={(val) => handlerState(val)}
        style={styles.InputBox}
      />
      <Search name="search1" size={20} style={styles.searchIcon} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  Search: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
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

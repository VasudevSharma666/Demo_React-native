import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Search from 'react-native-vector-icons/AntDesign';

const SearchBox = ({backgroundColor = 'red', value, handlerState}) => (
  <View style={{backgroundColor: backgroundColor, width: '100%', height: 120}}>
    <View style={styles.Search}>
      <TextInput
        placeholder="what are you looking for..."
        placeholderTextColor="#000000"
        value={value}
        onChangeText={(val) => handlerState(val)}
      />
      <Search name="search1" size={29} style={styles.search} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  Search: {
    backgroundColor: 'white',
    width: '80%',
    height: '40%',
    borderRadius: 8,
    position: 'absolute',
    top: 10,
    left: 30,
  },
  IncreHome: {},
  search: {
    position: 'absolute',
    top: 8,
    right: 0,
  },
});

export default SearchBox;

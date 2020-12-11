import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {pin} from '../../constants/image';

const index = () => (
  <>
    <View style={{flex: 1, alignSelf: 'center', top: '10%'}}>
      <View style={styles.TextAliment}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Image source={pin} style={styles.pinImage} />
          <Text style={styles.text}>DWT Listing</Text>
        </View>
        <View style={styles.UnderWord}>
          <View style={[styles.lineOne]} />
          <Text style={[styles.text2, {top: -5, left: 15}]}>
            Directory Theme
          </Text>
        </View>
      </View>

      <Text style={styles.text3}> Find & Explore World Top</Text>
      <Text style={styles.text3}>Places</Text>
    </View>
  </>
);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    top: -5,
  },
  text2: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  text3: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    width: 250,
    textAlign: 'center',
  },
  pinImage: {
    top: -5,
    width: 50,
    height: 60,
  },
  lineOne: {
    height: 7,
    borderTopColor: 'white',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    width: 30,
    left: -17,
    top: 10,
  },
  TextAliment: {
    flexDirection: 'column',
  },
  UnderWord: {
    top: -35,
    left: 100,
  },
});

export default index;

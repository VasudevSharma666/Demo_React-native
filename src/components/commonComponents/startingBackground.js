import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  StatusBar,
  View,
} from 'react-native';

import {loginpage, pin} from '../../constants/image';

const index = () => (
  <ImageBackground source={loginpage} style={styles.image} blurRadius={2}>
    <View style={styles.TextAliment}>
      <View style={{flex: 2, flexDirection: 'row', top: 150, left: 60}}>
        <Image source={pin} style={styles.pinImage} />
        <Text style={styles.text}>DWT Listing</Text>
      </View>
      <View style={styles.UnderWord}>
        <View style={[styles.lineOne]} />
        <View style={[styles.lineOne, {top: 4}]} />
        <Text style={[styles.text2, {top: -7, left: 15}]}>Directory Theme</Text>
      </View>
    </View>
    <View style={{position: 'absolute', top: 220, alignSelf: 'center'}}>
      <Text style={styles.text3}> Find & Explore World Top</Text>
      <Text style={styles.text3}>Places</Text>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    flexDirection: 'column',
  },
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
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  pinImage: {
    top: -5,
    width: 50,
    height: 60,
  },
  lineOne: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    width: 30,
    left: -17,
    top: 10,
  },
  TextAliment: {
    flex: 1,
    flexDirection: 'row',
  },
  UnderWord: {
    flex: 3,
    top: 180,
    left: -15,
  },
});

export default index;

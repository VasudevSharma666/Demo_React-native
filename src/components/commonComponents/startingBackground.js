import React from 'react';
import {loginpage, pin} from '../../constants/image';
import {
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';

function index() {
  return (
    <>
      <StatusBar backgroundColor="red" />

      <ImageBackground source={loginpage} style={styles.image} blurRadius={2}>
        <Image source={pin} style={styles.pinImage} />
        <Text style={styles.text}>DWT Listing</Text>
        <Text style={styles.lineone}> </Text>
        <Text style={styles.linetwo}> </Text>
        <Text style={styles.text2}>Directory Them</Text>
        <Text style={styles.text3}> Find & Explore World Top</Text>
        <Text style={styles.text4}>Places</Text>
      </ImageBackground>
    </>
  );
}
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
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',

    position: 'absolute',
    top: 120,
    left: 130,
  },
  text2: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',

    position: 'absolute',
    top: 150,
    left: 157,
  },
  text3: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',

    position: 'absolute',
    top: 200,
    left: 60,
  },
  text4: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',

    position: 'absolute',
    top: 230,
    left: 150,
  },
  pinImage: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 120,
    left: 80,
  },
  lineone: {
    textDecorationLine: 'line-through',
    color: 'white',
    position: 'absolute',
    top: 148,
    left: 130,
  },

  linetwo: {
    textDecorationLine: 'line-through',
    color: 'white',
    position: 'absolute',
    top: 152,
    left: 130,
  },
});

export default index;

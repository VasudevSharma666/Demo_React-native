import React from 'react';
import {ImageBackground, StyleSheet, Dimensions} from 'react-native';

import {loginpage} from '../../constants/image';

const BackgroundImag = () => {
  return (
    <ImageBackground source={loginpage} style={styles.image} blurRadius={2} />
  );
};
const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
export default BackgroundImag;

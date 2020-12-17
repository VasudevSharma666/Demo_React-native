import {StyleSheet} from 'react-native';

import {
  basicComponentsOne,
  inputPlaceHolder,
  TextColor,
} from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SilderText: {
    top: -120,
    left: 10,
  },
  text: {
    color: basicComponentsOne,
    fontSize: 15,
    fontWeight: 'bold',
    borderBottomColor: basicComponentsOne,
    borderBottomWidth: 1,
    width: '85%',
  },
  ButtonCss: {
    width: 80,
    marginTop: 10,
    flexDirection: 'row',
  },
  ButtonStyle: {
    backgroundColor: inputPlaceHolder,
    opacity: 0.7,
  },
  imgContainer: {
    flexDirection: 'row',
  },
  imag: {
    width: 100,
    height: 100,
    left: '15%',
    top: -30,
    borderColor: basicComponentsOne,
    borderWidth: 1,
  },
  Labels: {
    flexDirection: 'row',
    borderBottomColor: inputPlaceHolder,
    borderBottomWidth: 0.4,
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textData: {
    color: TextColor,
    fontSize: 18,
    fontWeight: 'bold',
    width: '70%',
    marginLeft: 10,
  },
});

import {StyleSheet} from 'react-native';

import color from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SilderText: {
    top: -120,
    left: 10,
  },
  text: {
    color: color.basicComponentsOne,
    fontSize: 15,
    fontWeight: 'bold',
    borderBottomColor: color.basicComponentsOne,
    borderBottomWidth: 1,
    width: '85%',
  },
  ButtonCss: {
    width: 80,
    marginTop: 10,
    flexDirection: 'row',
  },
  ButtonStyle: {
    backgroundColor: color.inputPlaceHolder,
    opacity: 0.7,
    marginLeft: 10,
  },
  imgContainer: {
    flexDirection: 'row',
  },
  imag: {
    width: 100,
    height: 100,
    top: -30,
    borderColor: color.basicComponentsOne,
    borderWidth: 1,
    marginLeft: 10,
  },
  Labels: {
    flexDirection: 'row',
    borderBottomColor: color.inputPlaceHolder,
    borderBottomWidth: 0.4,
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textData: {
    color: color.TextColor,
    fontSize: 18,
    fontWeight: 'bold',
    width: '70%',
    marginLeft: 10,
  },
});

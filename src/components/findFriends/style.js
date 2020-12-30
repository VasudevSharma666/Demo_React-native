import {StyleSheet} from 'react-native';

import color from '../../constants/color';

export const styles = StyleSheet.create({
  searchBoxCss: {
    width: '90%',
    alignSelf: 'center',
  },
  outerPartSearchBox: {
    width: '100%',
    backgroundColor: 'red',
    height: 70,
  },
  postContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
    borderWidth: 0.7,
  },
  imagCss: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  personData: {flexDirection: 'column', width: '75%'},
  marginLeft: {marginLeft: 5},
  color: {
    color: color.inputPlaceHolder,
  },
  fontSizeIcon: {
    fontSize: 30,
  },
});

import {StyleSheet} from 'react-native';
import {basicComponentsTwo, inputPlaceHolder} from '../../constants/color';

export const styles = StyleSheet.create({
  ProfileImag: {
    flex: 1,
    top: '3%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  Icon: {
    alignItems: 'center',
  },
  Labels: {
    flexDirection: 'row',
    borderTopColor: inputPlaceHolder,
    borderTopWidth: 0.5,
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  tagBackground: {
    height: 400,
    flexDirection: 'column',
    backgroundColor: basicComponentsTwo,
  },
});

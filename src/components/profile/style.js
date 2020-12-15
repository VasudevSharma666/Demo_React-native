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
    top: 10,
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    elevation: 1,
  },
  Icon: {
    alignItems: 'center',
    top: 10,
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
    height: 370,
    flexDirection: 'column',
    backgroundColor: basicComponentsTwo,
  },
});

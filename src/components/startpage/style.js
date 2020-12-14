import {StyleSheet} from 'react-native';
import {basicComponentsOne, basicComponentsTwo} from '../../constants/color';
export const styles = StyleSheet.create({
  buttonSingIn: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: basicComponentsOne,
  },
  buttontext: {
    color: basicComponentsTwo,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  SingIn: {
    position: 'absolute',
    bottom: 200,
    alignSelf: 'center',
    width: 250,
  },
  Login: {
    position: 'absolute',
    bottom: 110,
    alignSelf: 'center',
    width: 250,
  },
});

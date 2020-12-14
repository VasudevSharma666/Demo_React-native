import {StyleSheet} from 'react-native';
import {basicComponentsOne, basicComponentsTwo} from '../../constants/color';
export const styles = StyleSheet.create({
  Username: {
    paddingBottom: 15,
    alignSelf: 'center',
  },
  Password: {
    paddingBottom: 15,
    alignSelf: 'center',
  },
  button: {
    paddingBottom: 15,
    alignSelf: 'center',
    width: 300,
  },

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
});

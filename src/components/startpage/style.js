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
    marginBottom: '10%',
    alignSelf: 'center',
    width: 250,
  },
  Login: {
    marginBottom: '30%',
    alignSelf: 'center',
    width: 250,
  },
});

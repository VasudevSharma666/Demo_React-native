import {StyleSheet} from 'react-native';
import {basicComponentsTwo, basicComponentsOne} from '../../constants/color';
export const styles = StyleSheet.create({
  name: {
    paddingBottom: 15,
    alignSelf: 'center',
  },
  email: {
    paddingBottom: 15,
    alignSelf: 'center',
  },
  firstPassword: {
    paddingBottom: 15,
    alignSelf: 'center',
  },
  SignIn: {
    paddingBottom: 15,
    alignSelf: 'center',
    width: 300,
  },
  facebook: {
    alignSelf: 'flex-start',
    left: 25,
    width: 130,
  },
  Google: {
    alignSelf: 'flex-end',
    right: 25,
    width: 130,
  },
  OR: {
    color: basicComponentsTwo,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    position: 'absolute',
    top: 15,
    width: '100%',
  },
  buttonSingIn: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: basicComponentsOne,
  },
  buttontext: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

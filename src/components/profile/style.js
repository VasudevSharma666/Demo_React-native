import {StyleSheet} from 'react-native';
import {
  basicComponentsOne,
  basicComponentsTwo,
  inputPlaceHolder,
} from '../../constants/color';

export const styles = StyleSheet.create({
  ProfileImag: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  Profile: {
    width: 120,
    height: 120,
    borderRadius: 400 / 2,
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
    position: 'absolute',
    top: 55,
    elevation: 2,
    width: '100%',
  },
  SocialMedia: {
    borderRadius: 60,
    height: 70,
    backgroundColor: basicComponentsTwo,
    marginLeft: 10,
  },
  IconCss: {
    fontSize: 21,
    color: basicComponentsOne,
  },
});

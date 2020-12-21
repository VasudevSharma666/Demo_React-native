import {StyleSheet} from 'react-native';
import color from '../../constants/color';

export const styles = StyleSheet.create({
  ProfileImag: {
    alignSelf: 'center',
    marginTop: 2,
  },
  Profile: {
    width: 120,
    height: 120,
    borderRadius: 400 / 2,
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
    borderTopColor: color.inputPlaceHolder,
    borderTopWidth: 0.5,
    width: '100%',
    height: 40,
    alignItems: 'center',
    top: -13,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  tagBackground: {
    height: 370,
    flexDirection: 'column',
    backgroundColor: color.basicComponentsTwo,
    position: 'absolute',
    top: 55,
    elevation: 2,
    width: '100%',
  },
  SocialMedia: {
    borderRadius: 60,
    height: 70,
    backgroundColor: color.basicComponentsTwo,
    marginLeft: 10,
  },
  IconCss: {
    fontSize: 21,
    color: color.basicComponentsOne,
  },
  AddOtherCss: {
    marginLeft: 20,
  },
});

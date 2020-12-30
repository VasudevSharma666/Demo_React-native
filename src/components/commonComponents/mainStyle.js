import {StyleSheet} from 'react-native';

import color from '../../constants/color';

const mainStyle = StyleSheet.create({
  unauthButton: {
    width: '85%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  input: {
    paddingBottom: 15,
    alignSelf: 'center',
  },
  KeyBoardScrollView: {
    flex: 1,
  },
  TextBold: {
    fontWeight: 'bold',
  },
  PostsContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  IconsCss: {
    fontSize: 21,
    color: color.basicComponentsOne,
  },
  fullScreen: {
    width: '100%',
    height: '100%',
  },
  transparent: {
    backgroundColor: color.transparent,
  },
  marginBottom: {
    marginBottom: 10,
  },
  DrawerIcon: {
    fontSize: 22,
    color: color.basicComponentsTwo,
  },
});
export default mainStyle;

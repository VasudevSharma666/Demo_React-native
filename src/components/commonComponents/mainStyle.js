import {StyleSheet} from 'react-native';
import {basicComponentsOne, transparent} from '../../constants/color';
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
    color: basicComponentsOne,
  },
  fullScreen: {
    width: '100%',
    height: '100%',
  },
  transparent: {
    backgroundColor: transparent,
  },
});
export default mainStyle;

import {StyleSheet} from 'react-native';
import {basicComponentsOne} from '../../constants/color';
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
});
export default mainStyle;

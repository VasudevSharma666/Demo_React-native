import {StyleSheet} from 'react-native';
import color from '../../constants/color';
export const styles = StyleSheet.create({
  backgroundBox: {
    justifyContent: 'center',
    height: 90,
    backgroundColor: color.basicComponentsOne,
  },

  searchBox: {
    width: '70%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: color.transparent,
  },
  ButtonSection: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ButtonWidth: {
    width: '33%',
  },
  textResult: {
    left: 20,
    top: 10,
    fontSize: 20,
  },
  SectionContainer: {
    height: 190,
    backgroundColor: color.basicComponentsTwo,
    elevation: 2,
    marginBottom: 10,
  },
  ButtonStyle: {
    backgroundColor: color.TextColor,
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

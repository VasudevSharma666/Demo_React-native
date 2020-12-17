import {StyleSheet} from 'react-native';
import {
  basicComponentsOne,
  transparent,
  basicComponentsTwo,
  TextColor,
} from '../../constants/color';
export const styles = StyleSheet.create({
  backgroundBox: {
    justifyContent: 'center',
    height: 90,
    backgroundColor: basicComponentsOne,
  },

  searchBox: {
    width: '70%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: transparent,
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
    backgroundColor: basicComponentsTwo,
    elevation: 2,
    marginBottom: 10,
  },
  ButtonStyle: {
    backgroundColor: TextColor,
    borderRadius: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

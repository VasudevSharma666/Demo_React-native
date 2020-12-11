import {SafeAreaView, StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  backgroundBox: {
    justifyContent: 'center',
    height: 90,
    backgroundColor: 'red',
  },

  searchBox: {
    width: '70%',

    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
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
});

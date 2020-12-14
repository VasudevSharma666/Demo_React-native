import {StyleSheet} from 'react-native';
import {basicComponentsOne} from '../../constants/color';
export const styles = StyleSheet.create({
  HomeBackground: {
    width: '100%',
    height: 300,
  },
  FirstText: {
    top: -160,
    alignSelf: 'center',
    color: basicComponentsOne,
    fontFamily: 'lucida grande',
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: 'bold',
    elevation: 2,
  },
  SecondText: {
    top: -160,
    alignSelf: 'center',
    color: basicComponentsOne,
    fontFamily: 'lucida grande',
    fontStyle: 'italic',
    fontSize: 8,
    fontWeight: 'bold',
  },
  Search: {
    top: -150,
    alignSelf: 'center',
    width: 250,
  },
  ButtonWithIcone: {
    position: 'absolute',
    top: 280,
    left: 25,
  },
  LatestTitle: {
    position: 'absolute',
    top: 380,
    left: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  ViewAllButton: {
    position: 'absolute',
    top: 370,
    right: 20,
  },
  ButtonBack: {
    width: 70,
    position: 'absolute',
    bottom: '5%',
    left: '70%',
  },
});

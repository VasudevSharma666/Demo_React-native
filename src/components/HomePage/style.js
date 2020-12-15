import {StyleSheet} from 'react-native';
import {basicComponentsOne, LiteText} from '../../constants/color';
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
    left: '40%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ViewAllButton: {
    right: '15%',
    top: '-3%',
  },
  ButtonBack: {
    width: 70,
    position: 'absolute',
    bottom: '5%',
    left: '70%',
  },
  TagContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  MainContainer: {
    backgroundColor: '#e3e3e3',
    elevation: 2,
    width: '100%',
    height: 430,
    marginBottom: 10,
  },
});

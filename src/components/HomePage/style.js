import {StyleSheet} from 'react-native';
import color from '../../constants/color';
export const styles = StyleSheet.create({
  HomeBackground: {
    width: '100%',
    height: 300,
  },
  FirstText: {
    top: -160,
    alignSelf: 'center',
    color: color.basicComponentsOne,
    fontStyle: 'italic',
    fontSize: 20,
    elevation: 2,
  },
  SecondText: {
    top: -160,
    alignSelf: 'center',
    color: color.basicComponentsOne,
    fontFamily: 'lucida grande',
    fontStyle: 'italic',
    fontSize: 8,
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
    marginLeft: 15,
    fontSize: 20,
  },
  ViewAllButton: {
    marginRight: 20,
    top: '-3%',
  },
  ButtonBack: {
    width: 70,
    position: 'absolute',
    bottom: '5%',
    left: '70%',
  },

  MainContainer: {
    backgroundColor: '#e3e3e3',
    elevation: 2,
    width: '100%',
    height: 430,
    marginBottom: 10,
  },
  ImageStyle: {
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  LastLine: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  scrollup: {
    borderRadius: 60,
    height: 50,
  },
});

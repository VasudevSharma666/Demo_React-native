import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  HomeBackground: {
    width: '100%',
    height: 260,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  FirstText: {
    position: 'absolute',
    top: 160,
    left: '15%',
    color: 'red',
    fontFamily: 'lucida grande',
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: 'bold',
  },
  SecondText: {
    position: 'absolute',
    top: 180,
    left: '15%',
    color: 'red',
    borderColor: 'black',
    fontFamily: 'lucida grande',
    fontStyle: 'italic',
    fontSize: 8,
    fontWeight: 'bold',
  },
  Search: {
    position: 'absolute',
    top: 180,
    left: '4%',
    width: '90%',
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
  PostsCont: {
    flex: 1,
    top: '15%',
    left: 30,
    width: '85%',
  },
});

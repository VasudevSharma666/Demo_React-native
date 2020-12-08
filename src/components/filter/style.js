import {SafeAreaView, StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  Filter: {
    position: 'absolute',
    top: 140,
    left: 0,
    width: '33%',
    borderRightColor: '#FFFFFF',
  },
  Sort: {position: 'absolute', top: 140, left: 120, width: '33%'},
  Reset: {position: 'absolute', top: 140, left: 240, width: '33.33%'},
  IconReset: {
    position: 'absolute',
    top: 155,
    left: '70%',
  },
  IconShort: {
    position: 'absolute',
    top: 155,
    left: '40%',
  },
  IconFilter: {
    position: 'absolute',
    top: 155,
    left: '3%',
  },
  backgroundBox: {
    backgroundColor: 'white',
    width: '100%',
    height: '13%',
    position: 'absolute',
    top: 149,
  },
  text1: {
    position: 'absolute',
    top: 210,
    left: 20,
    fontSize: 20,
  },
  PostsCont: {
    flex: 2,
    backgroundColor: '#D3D3D3',
    top: 10,
    width: '100%',
    height: '100%',
  },
});

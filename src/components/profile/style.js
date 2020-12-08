import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  ProfileImag: {
    top: 20,
    left: 20,
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  name: {
    top: 23,
    left: 30,
    fontSize: 25,
    fontWeight: 'bold',
  },
  Icon: {
    top: 28,
    left: 15,
  },
  Labels: {
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderTopColor: 'gray',
    borderWidth: 0.5,
    width: '100%',
    height: 50,
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  PostsCont: {
    flex: 1,
    flexDirection: 'column',
    top: 20,
  },
  tagBackground: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: 0,
  },
});

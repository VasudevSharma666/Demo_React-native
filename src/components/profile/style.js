import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  ProfileImag: {
    flex: 1,
    top: '3%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  Icon: {
    alignItems: 'center',
  },
  Labels: {
    flexDirection: 'row',
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    width: '100%',
    height: '10%',
    justifyContent: 'center',
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
  },
});

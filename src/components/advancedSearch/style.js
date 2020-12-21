import {StyleSheet} from 'react-native';
import color from '../../constants/color';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pinIcon: {
    left: '85%',
    top: -40,
    color: color.pinIcon,
    elevation: 10,
    fontSize: 30,
  },
  formArea: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  InputBox: {
    borderBottomWidth: 2,
    borderBottomColor: color.buttonBackground,
  },
  PickerElement: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: color.buttonBackground,
  },
  status: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  button: {
    width: '30%',
    marginTop: 10,
  },
  OtherButtonStyle: {
    flexDirection: 'row',
    marginTop: 10,
  },
  Shift: {
    marginTop: 10,
  },
  ButtonStyle: {
    backgroundColor: color.buttonBackground,
    borderRadius: 20,
    marginRight: 10,
  },
});

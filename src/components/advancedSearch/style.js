import {StyleSheet} from 'react-native';
import {pinIcon, buttonBackground} from '../../constants/color';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pinIcon: {
    left: '85%',
    top: '-6%',
    color: pinIcon,
    elevation: 10,
    fontSize: 30,
  },
  formArea: {
    flex: 1,
    width: '90%',
    left: '4%',
  },
  InputBox: {
    borderBottomWidth: 2,
    borderBottomColor: buttonBackground,
  },
  PickerElement: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: buttonBackground,
  },
  status: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  button: {
    width: '30%',
    top: 10,
    height: '10%',
  },
  OtherButtonStyle: {
    flexDirection: 'row',
    top: '7%',
  },
});

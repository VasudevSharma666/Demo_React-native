import {StyleSheet} from 'react-native';
import color from '../../constants/color';
export const styles = StyleSheet.create({
  facebook: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    width: 130,
  },
  Google: {
    alignSelf: 'flex-end',
    marginRight: 30,
    width: 130,
  },
  OR: {
    color: color.basicComponentsTwo,
    fontSize: 15,
    fontWeight: 'bold',
  },
  LinkButton: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  keyBoard: {
    marginBottom: 10,
  },
});

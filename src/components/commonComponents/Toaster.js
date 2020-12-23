import {ToastAndroid} from 'react-native';

const Toaster = (value) =>
  ToastAndroid.showWithGravityAndOffset(
    value,
    ToastAndroid.SHORT,
    ToastAndroid.TOP,
    10,
    50,
  );

export default Toaster;

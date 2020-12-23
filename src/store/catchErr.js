import {Alert} from 'react-native';

const catchErr = (err) => {
  switch (err.message) {
    case 'Network request failed': {
      return Alert.alert('Internet is not connected');
    }
    default: {
      return Alert.alert('Something is Wrong' + err);
    }
  }
};

export default catchErr;

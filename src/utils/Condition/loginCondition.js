import {useSelector} from 'react-redux';

const LoginCondition = ({navigation}) => {
  const login = useSelector((state) => state.login);
  if (login.email == 'vasudev@gmail.com' && login.password == '1234') {
    return navigation.navigate('Drawer');
  } else {
    return Alert.alert('Invalid Email or Password');
  }
};

export default LoginCondition;

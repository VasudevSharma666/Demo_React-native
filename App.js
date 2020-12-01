import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import startPage from './src/components/startpage';
import Login from './src/components/login';
import signIn from './src/components/signin';
import DrawerNavigator from './src/utils/nativation/drawerNavigatoion';
import {useSelector} from 'react-redux';
const Stack = createStackNavigator();

const App = () => {
  const token = useSelector((state) => state.login);
  useEffect(() => {
    console.log(token.tokenData);
  }, [token]);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode={null}>
        <Stack.Screen name="Home" component={startPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={signIn} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {isNull} from 'lodash';

import startPage from './src/components/startpage';
import Login from './src/components/login';
import signIn from './src/components/signin';
import DrawerNavigator from './src/utils/nativation/drawerNavigatoion';

const Stack = createStackNavigator();

const App = () => {
  const token = useSelector((state) => state.login);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode={false}>
        {isNull(token.tokenData) ? (
          <>
            <Stack.Screen name="Home" component={startPage} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignIn" component={signIn} />
          </>
        ) : (
          <Stack.Screen name="Home" component={DrawerNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

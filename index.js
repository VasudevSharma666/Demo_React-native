import React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';

import colors from './src/constants/color';
import store from './src/store/finalstore/store';

const Redux = () => (
  <>
    <StatusBar backgroundColor={colors.basicComponentsOne} />
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

AppRegistry.registerComponent(appName, () => Redux);

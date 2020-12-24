import React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

import colors from './src/constants/color';
import {store, persistor} from './src/store/finalstore/store';

const Redux = () => (
  <>
    <StatusBar backgroundColor={colors.basicComponentsOne} />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </>
);

AppRegistry.registerComponent(appName, () => Redux);

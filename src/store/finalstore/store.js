import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';

import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';

import {Reducer} from '../combineReducers/combineReducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['login'],
  blacklist: ['Api', 'signin'],
};

const persistedReducer = persistReducer(persistConfig, Reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store);

export {store, persistor};

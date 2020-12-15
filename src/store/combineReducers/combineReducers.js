const {combineReducers} = require('redux');

import {loginReducer} from '../login/Reducer';
import {SignInReducer} from '../signin/Reducer';
import {ApiReducer} from '../api/Reducer';

export const Reducer = combineReducers({
  login: loginReducer,
  signin: SignInReducer,
  Api: ApiReducer,
});

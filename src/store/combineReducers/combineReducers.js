const {combineReducers} = require('redux');

import {loginReducer} from '../login/Reducer';
import {SigninReducer} from '../signin/Reducer';

export const Reducer = combineReducers({
  login: loginReducer,
  signin: SigninReducer,
});

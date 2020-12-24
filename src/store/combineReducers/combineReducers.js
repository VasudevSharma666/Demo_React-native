import {combineReducers} from 'redux';

import {loginReducer} from '../login/reducer';
import {SignInReducer} from '../signin/reducer';
import {ApiReducer} from '../api/reducer';

export const Reducer = combineReducers({
  login: loginReducer,
  signin: SignInReducer,
  Api: ApiReducer,
});

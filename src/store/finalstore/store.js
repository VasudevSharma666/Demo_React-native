import {createStore} from 'redux';
import {Reducer} from '../combineReducers/combineReducers';

const store = createStore(Reducer);

export default store;

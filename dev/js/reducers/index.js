import {combineReducers} from 'redux';
import UserReducer from './reducer-users.js';

// we need a main javascript object that is going to be throwed inside our Store
const allReducers = combineReducers({
  users: UserReducer
});

export default allReducers;

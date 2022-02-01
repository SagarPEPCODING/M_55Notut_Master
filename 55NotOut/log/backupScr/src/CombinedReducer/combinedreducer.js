import Increment from '../Reducers/increment';
import Decrement from '../Reducers/decrement';
import loggedReducer from '../Reducers/logged';
import myemail from '../Reducers/myemail';

import { combineReducers } from 'redux';

const CombinedReducers = combineReducers({
  loggin: loggedReducer,
  myemail: myemail,
});

export default CombinedReducers;

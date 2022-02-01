import myemail from './myemail';
import logged from './logged';

import { combineReducers } from 'redux';

const allreducers = combineReducers({
  myemail: myemail,
  logged: logged,
});

export default allreducers;

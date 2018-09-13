import { combineReducers } from 'redux';
import logInReducer from '../containers/log_in/reducer';
import registerReducer from '../containers/register/reducer';
import usersReducer from '../containers/users/reducer';

const rootReducer = combineReducers({
  logIn: logInReducer,
  register: registerReducer,
  users: usersReducer,
});

export default rootReducer;

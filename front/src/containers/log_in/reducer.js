import md5 from 'md5';
import { INPUT_EMAIL, INPUT_PASSWORD, LOG_IN, GET_STATUS } from './constants';
import { logIn } from './fetch';
import reduxStore from '../../store';

const defaultState = {
  isAdmin: false,
  user: {},
  currentUserEmail: '',
  logInStatus: '',
};

export default function logInReducer(state = defaultState, action) {
  switch (action.type) {
    case INPUT_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email,
        },
      };
    case INPUT_PASSWORD:
      return {
        ...state,
        user: {
          ...state.user,
          password: action.password,
        },
      };
    case LOG_IN:
      { const password = md5(action.password);
        logIn(action.email, password).then((response) => {
          reduxStore.dispatch({ type: GET_STATUS, data: response });
        }); }
      return state;
    case GET_STATUS:
      return {
        ...state,
        logInStatus: action.data.data,
      };

    default:
      return state;
  }
}

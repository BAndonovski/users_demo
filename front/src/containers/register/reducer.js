import md5 from 'md5';
import { registerUser } from './fetch';
import reduxStore from '../../store';


import {
  INPUT_NAME_REG,
  INPUT_SURNAME_REG,
  INPUT_EMAIL_REG,
  INPUT_PASSWORD_REG,
  RETYPE_PASSWORD,
  REGISTER,
  HANDLE_CANCEL,
  GET_REGISTER_STATUS,
} from './constants';

const defaultState = {
  user: {},
  retypedPassword: '',
  changeRoute: false,
  registerStatus: '',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case INPUT_NAME_REG:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.name,
        },
      };
    case INPUT_SURNAME_REG:
      return {
        ...state,
        user: {
          ...state.user,
          surname: action.surname,
        },
      };
    case INPUT_EMAIL_REG:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email,
        },
      };
    case INPUT_PASSWORD_REG:
      return {
        ...state,
        user: {
          ...state.user,
          password: action.password,
        },
      };
    case RETYPE_PASSWORD:
      return {
        ...state,
        retypedPassword: action.password,
      };
    case REGISTER:
      { const user = {
        name: action.user.name,
        surname: action.user.surname,
        email: action.user.email,
        password: md5(action.user.password),
      };
      registerUser(user).then((response) => {
        reduxStore.dispatch({ type: GET_REGISTER_STATUS, data: response });
      }); }
      return state;
    case HANDLE_CANCEL:
      if (action.changeRoute === '/register') {
        return {
          ...state,
          changeRoute: !state.changeRoute,
        };
      }
      return state;
    case GET_REGISTER_STATUS:
      return {
        ...state,
        registerStatus: action.data.data,
      };
    default: return state;
  }
};

export default reducer;

import { getUsers, createUser, deleteUser, updateUser, filterList } from './fetch';
import reduxStore from '../../store';
import md5 from 'md5';

import {
  GET_USERS,
  SAVE_USERS,
  OPEN_ADD_USER_DIALOG,
  INPUT_NAME,
  INPUT_SURNAME,
  INPUT_EMAIL,
  INPUT_PASSWORD,
  SELECT_ADMIN_USER,
  CREATE_USER,
  DELETE_USER,
  GET_CLICKED_USER_DATA,
  OPEN_EDIT_USER_DIALOG,
  EDIT_NAME,
  EDIT_SURNAME,
  EDIT_EMAIL,
  EDIT_PASSWORD,
  EDIT_ADMIN_USER,
  UPDATE_USER,
  HANDLE_CHANGE_PAGE,
  INPUT_NAME_FILTER,
  INPUT_SURNAME_FILTER,
  CHECK_IS_ADMIN_FILTER,
  FILTER_USERS,
  SAVE_FILTRED_USERS,
  RESET_FILTERS,
} from './constants';

const defaultState = {
  users: [],
  userInput: {
    isAdmin: '0',
  },
  user: {},
  openDialog: false,
  openEditDialog: false,
  page: 0,
  usersListLength: 0,
  filters: {},
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS:
      getUsers(state.page).then((response) => {
        reduxStore.dispatch({ type: SAVE_USERS, data: response });
      });
      return state;
    case SAVE_USERS:
      return {
        ...state,
        users: action.data.data,
        usersListLength: action.data.count,
      };
    case OPEN_ADD_USER_DIALOG:
      return {
        ...state,
        openDialog: action.open,
      };
    case INPUT_NAME:
      return {
        ...state,
        userInput: {
          ...state.userInput,
          name: action.name,
        },
      };
    case INPUT_SURNAME:
      return {
        ...state,
        userInput: {
          ...state.userInput,
          surname: action.surname,
        },
      };
    case INPUT_EMAIL:
      return {
        ...state,
        userInput: {
          ...state.userInput,
          email: action.email,
        },
      };
    case INPUT_PASSWORD:
      return {
        ...state,
        userInput: {
          ...state.userInput,
          password: action.password,
        },
      };
    case SELECT_ADMIN_USER:
      return {
        ...state,
        userInput: {
          ...state.userInput,
          isAdmin: action.isAdmin === false ? '0' : '1',
        },
      };
    case CREATE_USER:
      { const user = {
        name: action.user.name,
        surname: action.user.surname,
        email: action.user.email,
        isAdmin: action.user.isAdmin,
        password: md5(action.user.password),
      };
      createUser(user).then(() => {
        reduxStore.dispatch({ type: GET_USERS });
      });
      }
      return {
        ...state,
        userInput: {
          isAdmin: 0,
        },
      };
    case DELETE_USER:
      deleteUser(action.id).then(() => {
        reduxStore.dispatch({ type: GET_USERS });
      });
      return state;
    case GET_CLICKED_USER_DATA:
      return {
        ...state,
        user: action.user,
      };
    case OPEN_EDIT_USER_DIALOG:
      return {
        ...state,
        openEditDialog: action.open,
      };
    case EDIT_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.name,
        },
      };
    case EDIT_SURNAME:
      return {
        ...state,
        user: {
          ...state.user,
          surname: action.surname,
        },
      };
    case EDIT_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email,
        },
      };
    case EDIT_PASSWORD:
      return {
        ...state,
        user: {
          ...state.user,
          password: action.password,
        },
      };
    case EDIT_ADMIN_USER:
      return {
        ...state,
        user: {
          ...state.user,
          isAdmin: action.isAdmin ? 1 : 0,
        },
      };
    case UPDATE_USER:
      updateUser(action.user).then(() => {
        reduxStore.dispatch({ type: GET_USERS });
      });
      return state;
    case HANDLE_CHANGE_PAGE:
      getUsers(action.page).then((response) => {
        reduxStore.dispatch({ type: SAVE_USERS, data: response });
      });
      return {
        ...state,
        page: action.page,
      };
    case INPUT_NAME_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          name: action.name,
        },
      };
    case INPUT_SURNAME_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          surname: action.surname,
        },
      };
    case CHECK_IS_ADMIN_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          isAdmin: action.isAdmin ? 1 : 0,
        },
      };
    case FILTER_USERS:
      filterList(state.filters, state.page).then((response) => {
        reduxStore.dispatch({ type: SAVE_FILTRED_USERS, data: response });
      });
      return state;
    case SAVE_FILTRED_USERS:
      return {
        ...state,
        users: action.data.data,
        usersListLength: action.data.count,
      };
    case RESET_FILTERS:
      getUsers(state.page).then((response) => {
        reduxStore.dispatch({ type: SAVE_USERS, data: response });
      });
      return {
        ...state,
        filters: {
          name: '',
          surname: '',
        },
      };
    default: return state;
  }
};

export default reducer;

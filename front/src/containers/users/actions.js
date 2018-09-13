
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
  UPDATE_USER,
  EDIT_ADMIN_USER,
  HANDLE_CHANGE_PAGE,
  GET_USERS_LENGTH,
  INPUT_NAME_FILTER,
  INPUT_SURNAME_FILTER,
  CHECK_IS_ADMIN_FILTER,
  FILTER_USERS,
  SAVE_FILTRED_USERS,
  RESET_FILTERS,
} from './constants';

export function getUsersList() {
  return {
    type: GET_USERS,
  };
}
export function saveUsers() {
  return {
    type: SAVE_USERS,
  };
}
export function openAddUSerDialog(open) {
  return {
    type: OPEN_ADD_USER_DIALOG,
    open,
  };
}
export function inputName(name) {
  return {
    type: INPUT_NAME,
    name,
  };
}
export function inputSurname(surname) {
  return {
    type: INPUT_SURNAME,
    surname,
  };
}
export function inputEmail(email) {
  return {
    type: INPUT_EMAIL,
    email,
  };
}
export function inputPassword(password) {
  return {
    type: INPUT_PASSWORD,
    password,
  };
}
export function selectAdminUser(isAdmin) {
  return {
    type: SELECT_ADMIN_USER,
    isAdmin,
  };
}
export function createUser(user) {
  return {
    type: CREATE_USER,
    user,
  };
}
export function deleteUser(id) {
  return {
    type: DELETE_USER,
    id,
  };
}
export function getClickedUserData(user) {
  return {
    type: GET_CLICKED_USER_DATA,
    user,
  };
}
export function openEditUSerDialog(open) {
  return {
    type: OPEN_EDIT_USER_DIALOG,
    open,
  };
}
export function editName(name) {
  return {
    type: EDIT_NAME,
    name,
  };
}
export function editSurname(surname) {
  return {
    type: EDIT_SURNAME,
    surname,
  };
}
export function editEmail(email) {
  return {
    type: EDIT_EMAIL,
    email,
  };
}
export function editPassword(password) {
  return {
    type: EDIT_PASSWORD,
    password,
  };
}
export function editAdminUser(isAdmin) {
  return {
    type: EDIT_ADMIN_USER,
    isAdmin,
  };
}
export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user,
  };
}
export function handleChangePage(page) {
  return {
    type: HANDLE_CHANGE_PAGE,
    page,
  };
}
export function getUsersLength() {
  return {
    type: GET_USERS_LENGTH,
  };
}
export function inputNameFilter(name) {
  return {
    type: INPUT_NAME_FILTER,
    name,
  };
}
export function inputSurnameFilter(surname) {
  return {
    type: INPUT_SURNAME_FILTER,
    surname,
  };
}
export function checkIsAdminFilter(isAdmin) {
  return {
    type: CHECK_IS_ADMIN_FILTER,
    isAdmin,
  };
}
export function filterUsers() {
  return {
    type: FILTER_USERS,
  };
}

export function saveFilteredUsers() {
  return {
    type: SAVE_FILTRED_USERS,
  };
}

export function resetFilters() {
  return {
    type: RESET_FILTERS,
  };
}

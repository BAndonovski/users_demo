import { INPUT_EMAIL, INPUT_PASSWORD, LOG_IN, GET_STATUS } from './constants';

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

export function logIn(email, password) {
  return {
    type: LOG_IN,
    email,
    password,
  };
}

export function getStatus(data) {
  return {
    type: GET_STATUS,
    data,
  };
}

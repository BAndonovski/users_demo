
import {
  INPUT_NAME_REG,
  INPUT_SURNAME_REG,
  INPUT_EMAIL_REG,
  INPUT_PASSWORD_REG,
  RETYPE_PASSWORD,
  REGISTER,
  HANDLE_CANCEL,
} from './constants';

export function inputNameReg(name) {
  return {
    type: INPUT_NAME_REG,
    name,
  };
}
export function inputSurnameReg(surname) {
  return {
    type: INPUT_SURNAME_REG,
    surname,
  };
}
export function inputEmailReg(email) {
  return {
    type: INPUT_EMAIL_REG,
    email,
  };
}
export function inputPasswordReg(password) {
  return {
    type: INPUT_PASSWORD_REG,
    password,
  };
}
export function retypePassword(password) {
  return {
    type: RETYPE_PASSWORD,
    password,
  };
}
export function register(user) {
  return {
    type: REGISTER,
    user,
  };
}
export function handleCancel(changeRoute) {
  return {
    type: HANDLE_CANCEL,
    changeRoute,
  };
}

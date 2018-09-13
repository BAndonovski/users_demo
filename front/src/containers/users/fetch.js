import store from 'store';
import { authorizationHeader } from '../../lib/headers';
import config from '../../lib/config';

export const getUsers = async function getUsersList(page) {
  const headers = authorizationHeader(store.get('jwttoken').key);

  const response = await fetch(`${config.API}/users?page=${page}`, {
    method: 'get',
    mode: 'cors',
    headers,
  });
  const json = await response.json();
  if (!response.ok) {
    console.log(response.status);
  }
  return json;
};

const check = (filter) => {
  if (Reflect.has(filter, 'name') && filter.name !== '') {
    return `&name=${filter.name}`;
  }
  if (Reflect.has(filter, 'surname') && filter.surname !== '') {
    return `&surname=${filter.surname}`;
  }
  if (Reflect.has(filter, 'isAdmin')) {
    return `&isAdmin=${filter.isAdmin}`;
  }
  if (Reflect.has(filter, 'name') && Reflect.has(filter, 'surname') && filter.name !== '' && filter.surname !== '') {
    return `&name=${filter.name}&surname=${filter.surname}`;
  }
  if (Reflect.has(filter, 'name') && Reflect.has(filter, 'isAdmin') && filter.name !== '') {
    return `&name=${filter.name}&isAdmin=${filter.isAdmin}`;
  }
  if (Reflect.has(filter, 'surname') && Reflect.has(filter, 'isAdmin') && filter.surname !== '') {
    return `&surname=${filter.surname}&isAdmin=${filter.isAdmin}`;
  }
  if (Reflect.has(filter, 'name') && Reflect.has(filter, 'surname') && Reflect.has(filter, 'isAdmin') && filter.name !== '' && filter.surname !== '') {
    return `&name=${filter.name}&surname=${filter.surname}&isAdmin=${filter.isAdmin}`;
  }
  return '';
};

export const filterList = async function filterList(filters, page) {
  const headers = authorizationHeader(store.get('jwttoken').key);
  const response = await fetch(`${config.API}/users?page=${page}${check(filters)}`, {
    method: 'get',
    mode: 'cors',
    headers,
  });
  const json = await response.json();
  if (!response.ok) {
    console.log(response.status);
  }
  return json;
};

export const createUser = async function userCreate(user) {
  const headers = authorizationHeader(store.get('jwttoken').key);
  const body = JSON.stringify(user);
  const response = await fetch(`${config.API}/user`, {
    method: 'post',
    mode: 'cors',
    headers,
    body,
  });
  if (!response.ok) {
    console.log(response.status);
  }
};
export const deleteUser = async function deleteUser(id) {
  const headers = authorizationHeader(store.get('jwttoken').key);
  const response = await fetch(`${config.API}/user/${id}`, {
    method: 'delete',
    mode: 'cors',
    headers,
  });
  if (!response.ok) {
    console.log(response.status);
  }
};


export const updateUser = async function editUser(user) {
  const headers = authorizationHeader(store.get('jwttoken').key);
  const body = JSON.stringify({
    name: user.name,
    surname: user.surname,
    email: user.email,
    password: user.password,
    isAdmin: user.isAdmin,
  });
  const response = await fetch(`${config.API}/user/${user.id}`, {
    method: 'put',
    mode: 'cors',
    headers,
    body,
  });
  if (!response.ok) {
    console.log(response.status);
  }
};

export default (getUsers, createUser, updateUser, filterList);

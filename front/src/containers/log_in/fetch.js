
import store from 'store';
import config from '../../lib/config';
import { baseHeader } from '../../lib/headers';

export const logIn = async function logIn(email, password) {
  const headers = baseHeader();
  const response = await fetch(`${config.API}/login`, {
    method: 'post',
    mode: 'cors',
    headers,
    body: JSON.stringify({ email, password }),
  });
  const key = await response.text();
  if (!response.ok) {
    console.log(response.status);
  }
  store.set('jwttoken', { key });
  return {
    data: response.status,
  };
};

export default logIn;


import store from 'store';
import config from '../../lib/config';
import { authorizationHeader } from '../../lib/headers';

export const registerUser = async function log(user) {
  const headers = authorizationHeader(store.get('jwttoken').key);
  const response = await fetch(`${config.API}/register`, {
    method: 'post',
    mode: 'cors',
    headers,
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    console.log(response.status);
  }
  return {
    data: response.status,
  };
};
export default registerUser;

// Authorization Header fot the use in everything else, jwt key required
export const authorizationHeader = (jwtKey) => {
  const autHeaders = new Headers();
  autHeaders.append('content-type', 'application/json');
  autHeaders.append('authorization', `${jwtKey}`);
  autHeaders.append('pragma', 'no-cache');
  autHeaders.append('cache-control', 'no-store');
  return autHeaders;
};

export const baseHeader = () => {
  const myHeader = new Headers();
  myHeader.append('content-type', 'application/json');
  myHeader.append('pragma', 'no-cache');
  myHeader.append('cache-control', 'no-cache');
  return myHeader;
};

export default { authorizationHeader, baseHeader };

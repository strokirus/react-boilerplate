export const API_SERVER = '//localhost:6060';
export const RESULT_LENGTH = 10;
export const PAGE_DEFAULT = 10;

/**
 * Describe all routes is available in project
*/
export const routePaths = {
  home: '/',
};

/**
 * Describe all routes is available in project
 * @params location Info about env project is running
 * @return {String} What server should be connected
*/
export const requestBuilder = (endpoint = 'any', params) => {
  let server = API_SERVER;
  switch (endpoint) {
    case 'any':
      server = server.concat('/any/');

      server = server.concat(`?limit=${RESULT_LENGTH}`);

      Object.keys(params).forEach((key) => {
        server = server.concat(`&${key}=${JSON.stringify(params[key])}`);
      });

      break;

    default:
      params.forEach((param) => {
        server = server.concat(`${param}/`);
      });

      break;
  }

  return server;
};

export const apiEndpoints = {
  requestBuilder,
};

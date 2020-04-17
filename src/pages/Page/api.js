import {
  requestBuilder,
} from '../../settings';

/**
 * Request to API
 * @param params Parameters
 * @return {Array} Results
 */
export const requestCall = (params = {}) => {
  const paramsSearch = { };

  Object.keys(params).forEach((k) => {
    paramsSearch[k] = params[k];
  });

  return fetch(`${requestBuilder('any', paramsSearch)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => error);
};

export default {
  requestCall,
};

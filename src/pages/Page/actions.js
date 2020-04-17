import C from './constants';

/**
 * Request to Page Request and store
 */
// eslint-disable-next-line import/prefer-default-export
export const fetchPage = (params) => ({
  type: C.FETCH_PAGE_REQUEST,
  params,
});

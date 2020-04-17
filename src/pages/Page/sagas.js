import {
  call,
  select,
  put,
  takeLatest,
} from 'redux-saga/effects';

import {
  requestCall,
} from './api';

import C from './constants';

/**
 * Trigged when Request is demmanded
*/
function* fetchPages(data) {
  let append = false;

  if (data.params) {
    append = data.params.append;
  }

  try {
    const response = yield call(requestCall, data.params);

    const { items } = yield select((state) => state.pages);

    if (response && response.status === 200) {
      let itemsUpdate = response.items;

      itemsUpdate = itemsUpdate.map((i) => ({
        ...i,
      }));

      if (append) {
        items.push(...itemsUpdate);
        itemsUpdate = items;
      }

      yield put({
        type: C.FETCH_PAGE_SUCCESS,
        data: itemsUpdate,
      });
    } else {
      throw response;
    }
  } catch (error) {
    yield put({
      type: C.FETCH_PAGE_FAILURE,
      error,
    });
  }
}

function* getPageData() {
  yield takeLatest(C.FETCH_PAGE_REQUEST, fetchPages);
}

export default getPageData;

import { all, fork } from 'redux-saga/effects';
import pageSaga from './pages/Page/sagas';

const sagas = [
  pageSaga,
];

/**
 * Describe all sagas used in project
 */
export default function* root() {
  yield all(sagas.map((saga) => fork(saga)));
}

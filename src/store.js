import 'regenerator-runtime/runtime';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import mainReducer from './mainReducer';
import mainSaga from './mainSaga';

const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, logger];
}

const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
);

/* eslint-disable no-underscore-dangle */
const store = createStore(
  mainReducer,
  enhancer,
);

/* eslint-enable */
sagaMiddleware.run(mainSaga);

export default store;

import { combineReducers } from 'redux';
import pages from './pages/Page/reducers';

const mainReducer = combineReducers({
  pages,
});

/**
 * Describe all reducers used in project
 */
export default mainReducer;

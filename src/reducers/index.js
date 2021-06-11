import {combineReducers} from 'redux';
import historyReducer from './historyReducer';

import newsReducer from './newsReducer';
import sourceReducer from './sourceReducer';

export default combineReducers({
  news: newsReducer,
  sources: sourceReducer,
  history: historyReducer,
});

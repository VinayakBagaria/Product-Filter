import { combineReducers } from 'redux';
import fetchDataReducer from './fetch_data_reducer';
import filterReducer from './filter_reducer';

const rootReducer = combineReducers({
  result: fetchDataReducer,
  filters: filterReducer,
});

export default rootReducer;

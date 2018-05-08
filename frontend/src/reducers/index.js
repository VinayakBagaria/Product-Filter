import { combineReducers } from 'redux';
import fetchDataReducer from './fetch_data_reducer';
import changePage from './change_page_reducer';

const rootReducer = combineReducers({
  result: fetchDataReducer,
  page: changePage,
});

export default rootReducer;

import { combineReducers } from 'redux';
import fetchDataReducer from './fetch_data_reducer';

const rootReducer = combineReducers({
  result: fetchDataReducer,
});

export default rootReducer;

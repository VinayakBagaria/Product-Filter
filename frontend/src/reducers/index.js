import { combineReducers } from 'redux';
import appReducer from './app_reducer';

const rootReducer = combineReducers({
  products: appReducer,
});

export default rootReducer;

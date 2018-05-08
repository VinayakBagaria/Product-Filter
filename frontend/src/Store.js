import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(promise))
);

export default Store;

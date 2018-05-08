import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(promise))
);

export default Store;

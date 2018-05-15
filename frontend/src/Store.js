import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

let middleware: Function;

if (process.env.NODE_ENV !== 'production') {
  middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
} else {
  middleware = applyMiddleware(thunkMiddleware);
}

const configureStore: Function = () => createStore(rootReducer, middleware);

export default configureStore;

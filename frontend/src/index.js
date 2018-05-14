import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './Store';
import App from './app/App';
import './index.css';

const rootRef: HTMLElement | null = document.getElementById('root');

if (rootRef !== null) {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <App />
    </Provider>,
    rootRef
  );
}

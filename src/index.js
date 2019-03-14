import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './redux/reducers';
import thunkMiddleware from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';

const logging = store => next => action => {
  console.group(action.type);
  console.log('%c prev state', 'color: red', store.getState());
  console.info('%c action', 'color: green', action);
  let finalResult = next(action);
  console.groupEnd(action.type);
  return finalResult;
};

ReactDOM.render(
  <Provider
    store={createStore(reducers, applyMiddleware(thunkMiddleware, logging))}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

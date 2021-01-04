import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import dataReducer from './reducers';

import logger from 'redux-logger'

const middlewares = [logger]

const store = createStore(dataReducer, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>
    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

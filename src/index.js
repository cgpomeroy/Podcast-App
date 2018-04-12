import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from "redux-promise";
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import reducers from "./Reducers";


const createStoreFromMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
<Provider store={createStoreFromMiddleware(reducers)}>
    <App/>
</Provider>
,document.getElementById('root'));
registerServiceWorker();

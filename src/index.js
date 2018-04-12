import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from "redux-promise";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import reducers from "./Reducers";


const createStoreFromMiddleware = applyMiddleware(promise)(createStore);

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);
let store = createStore(persistedReducer)
let persistor = persistStore(store)

ReactDOM.render(
<Provider store={createStoreFromMiddleware(persistedReducer)}>
    <PersistGate loading={null} persistor={persistor}>
        <App/>
    </PersistGate>
</Provider>
,document.getElementById('root'));
registerServiceWorker();

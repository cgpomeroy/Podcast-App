import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import reducers from './Reducers';
import Search from "./Containers/Search";

const createStoreFromMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
<MuiThemeProvider>
    <Provider store={createStoreFromMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route exact path="/search" component={ Search } />
            </div>
        </BrowserRouter>
    </Provider>
</MuiThemeProvider>
, document.getElementById('root'));
registerServiceWorker();

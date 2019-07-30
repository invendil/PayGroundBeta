import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'idempotent-babel-polyfill';
import { store } from './_helpers';
import { App } from './App';
import {BrowserRouter} from "react-router-dom";

render(
    <Provider store={store}>
             <App />
    </Provider>,
    document.getElementById('app')
);
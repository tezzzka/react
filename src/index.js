import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import { store } from './redux/store';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </BrowserRouter>,
    document.querySelector('#root')
);
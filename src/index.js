import { Provider, Provider as ReduxProvider } from 'react-redux';
import './index.css';
import { store, history, persistor } from './redux/store';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
    // <BrowserRouter>
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <PersistGate persistor={persistor} loading={null}>
                <App />
            </PersistGate>

        </ConnectedRouter>
    </Provider>,
    // </BrowserRouter>,
    document.querySelector('#root')
);
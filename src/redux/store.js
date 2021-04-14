import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

import middlewares from '../middlewares';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['chat', 'user'],
    // blacklist: [],
}

const initialState = {
    chat: {
        messages: [
            { value: 'Hello from Redux tch.', author: 'ai', chatroom: 'default', seen: false }
        ],
        navi: [],
        isLoading: false,
    },
    rooms: {
        links: []
    },

    user: {
        nickname: 'me',
        //class for style: human, ai, redux are avail now.
        class: 'human',
        avatar: '/'
    },
};

export const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, reducers(history));

const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(routerMiddleware(history), ...middlewares)
    )
);

export const persistor = persistStore(store);

export { store };

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';


const initialState = {
    chat: {
        messages: [
            { value: 'Hello from Redux tch.', author: 'ai' }
        ],
    },
    rooms: {
        links: []
    },
};

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools()
);

export { store };

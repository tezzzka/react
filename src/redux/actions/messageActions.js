import { createAction, getJSON } from 'redux-api-middleware';

export const SEND_MESSAGE = '@@message/SEND_MESSAGE';
export const API_MESSAGE = '@@message/API_MESSAGE';

export const START_MESSAGES_LOADING = '@@message/START_MESSAGES_LOADING';
export const SUCCESS_MESSAGES_LOADING = '@@message/SUCCESS_MESSAGES_LOADING';
export const ERROR_MESSAGES_LOADING = '@@message/ERROR_MESSAGES_LOADING';

export const uploadMessages = () => createAction({
    endpoint: '/api/api.json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [
        START_MESSAGES_LOADING,
        {
            type: SUCCESS_MESSAGES_LOADING,
            payload: (action, state, res) =>
                getJSON(res).then((data) => data),
        },
        ERROR_MESSAGES_LOADING,
    ],
});


export const sendMessage = (value, author, chatname, seen = true) => ({
    type: SEND_MESSAGE,
    payload: {
        value,
        author,
        chatname,
        seen,
    },
});

export const apiMessage = (value, author = 'api', chatname = '', seen = false) => ({
    type: API_MESSAGE,
    payload: {
        value,
        author,
        chatname,
        seen,
    },
});

export const RemoveMessage = (id) => ({
    type: SEND_MESSAGE,
    payload: {
        id
    },
});

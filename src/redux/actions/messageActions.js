export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (value, author, chatname, seen = true) => ({
    type: SEND_MESSAGE,
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

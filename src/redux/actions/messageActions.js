export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (value, author, chatname) => ({
    type: SEND_MESSAGE,
    payload: {
        value,
        author,
        chatname
    },
});

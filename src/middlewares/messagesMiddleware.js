import {
    SEND_MESSAGE,
    START_MESSAGES_LOADING,
    SUCCESS_MESSAGES_LOADING,
    ERROR_MESSAGES_LOADING,

    sendMessage,
    uploadMessages
}
    from '../redux/actions/messageActions';

export const messagesMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case undefined: {
            console.log(action);
            return;
        }
        case SEND_MESSAGE: {
            if (action.payload.author === 'me') {
                setTimeout(() => {
                    store.dispatch(
                        sendMessage('Yes, sure.', 'ai', action.payload.chatname, false)
                    )
                }, 4500);
            }
        }

    }
    return next(action)
}
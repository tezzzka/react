import { SEND_MESSAGE, sendMessage } from '../redux/actions/messageActions';
export const messagesMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
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
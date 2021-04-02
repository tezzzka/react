import { NEW_CHAT } from '../actions/newchat';

export const NewChatReducer = (state = [], action) => {
    switch (action.type) {
        case NEW_CHAT: {
            return { links: [...state.links, action.payload.chatname] }
        }
        default:
            return state
    }
};

import { SEND_MESSAGE } from '../actions/messageActions';

export const initialState = {
    messages: {},
};

export const chatReducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case SEND_MESSAGE: {
            return { messages: [...state.messages, { value: action.payload.value, author: action.payload.author }] }
            // return { messages: [...state.messages, { value: action.payload.value, author: action.payload.author }] }
        }
        default:
            return state
    }
};

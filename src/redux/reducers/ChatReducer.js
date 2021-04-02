import { SEND_MESSAGE } from '../actions/messageActions';

import json from '../../JSON/Chats.json';
import { NavRecharger } from './func';

export const initialState = {
    messages: {},
    navi: []
};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.payload.seen == false) {
                return {
                    messages: [...state.messages, { value: action.payload.value, author: action.payload.author, chatroom: action.payload.chatname, seen: action.payload.seen }],
                    navi: NavRecharger(json, state.messages),
                }
            } else {
                return {
                    messages: [...state.messages, { value: action.payload.value, author: action.payload.author, chatroom: action.payload.chatname, seen: action.payload.seen }],
                    navi: state.navi
                }
            }
        }

        default:
            return {
                messages: state.messages,
                navi: NavRecharger(json, state.messages),
            }
    }
};

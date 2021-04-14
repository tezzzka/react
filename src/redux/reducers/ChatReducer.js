import {
    SEND_MESSAGE,
    API_MESSAGE,
    START_MESSAGES_LOADING,
    SUCCESS_MESSAGES_LOADING,
    ERROR_MESSAGES_LOADING,
} from '../actions/messageActions';

import json from '../../JSON/Chats.json';
import { NavRecharger } from './func';

export const initialState = {
    messages: {},
    navi: [],
    isLoading: false,
};

export function chatReducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.payload.seen == false) {
                return {
                    messages: [...state.messages, { value: action.payload.value, author: action.payload.author, chatroom: action.payload.chatname, seen: action.payload.seen }],
                    navi: NavRecharger(json, state.messages),
                    isLoading: state.isLoading,
                }
            } else {
                return {
                    messages: [...state.messages, { value: action.payload.value, author: action.payload.author, chatroom: action.payload.chatname, seen: action.payload.seen }],
                    navi: state.navi,
                    isLoading: state.isLoading,
                }
            }
        }
        case API_MESSAGE: {
            return {
                messages: [{ value: action.payload.value, author: action.payload.author, chatroom: action.payload.chatname, seen: action.payload.seen }],
                isLoading: state.isLoading,
            }
        }

        case START_MESSAGES_LOADING: {
            return {
                isLoading: true,
            };
        }
        case SUCCESS_MESSAGES_LOADING: {
            console.log('SUCCESS_MESSAGES_LOADING')
            return {
                isLoading: false,
            }
        }

        default:
            return {
                messages: state.messages,
                navi: NavRecharger(json, state.messages),
                isLoading: state.isLoading,
            }
    }
};

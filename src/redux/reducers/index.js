import { combineReducers } from 'redux';
import { chatReducer } from './ChatReducer';
import { NewChatReducer } from './NewChatReducer';

export default combineReducers({
    chat: chatReducer,
    rooms: NewChatReducer,
});

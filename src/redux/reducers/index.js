import { combineReducers } from 'redux';
import { chatReducer } from './ChatReducer';
import { NewChatReducer } from './NewChatReducer';
import { UserReducer } from './UserReducer';
import { connectRouter } from 'connected-react-router';


// export default (history) => combineReducers({
//     router: connectRouter(history),
//     chat: chatReducer,
//     rooms: NewChatReducer,
//     user: UserReducer,
// });
export default (history) => {
    // console.log(history);
    return (
        combineReducers({
            router: connectRouter(history),
            chat: chatReducer,
            rooms: NewChatReducer,
            user: UserReducer,
        })
    )
};



// const appReducers = (history) => combineReducers({
//     router: connectRouter(history),
//     chat: chatReducer,
//     rooms: NewChatReducer,
//     user: UserReducer,
// });
// const rootReducer = (state, action) => {
//     return appReducers
// }
// export default { appReducers }

import { SET_PARAMS } from '../actions/setUsernameAction';

export const UserReducer = (state = {}, action) => {
    // console.log(state.nickname);
    // console.log(action.payload);
    // console.log(action.type);

    switch (action.type) {
        case SET_PARAMS: {
            return { nickname: action.payload.username }
        }
        default:
            return state
    }
};

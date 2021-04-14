export const SET_PARAMS = 'SET_PARAMS';

export const setUsername = (username, avatar = 'ava', classname = 'human') => ({
    type: SET_PARAMS,
    payload: {
        username,
        avatar,
        classname
    },
});

export const NEW_CHAT = 'NEWCHAT';

export const createNewChat = (chatname) => ({
    type: NEW_CHAT,
    payload: {
        chatname,
    },
});

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'



const messengerReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.NewMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.NewMessageBody;
            state.NewMessageBody = '';
            state.MessageData.push({ id: 4, message: body });
            return state;
        default:
            return state;

    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default messengerReducer;
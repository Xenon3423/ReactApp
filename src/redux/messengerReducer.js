const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    MessengerData: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Sam' },
        { id: 3, name: 'Katrin' },
        { id: 4, name: 'John' }
    ],
    MessageData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Yo' }
    ],
    NewMessageBody: ""

}

const messengerReducer = (state = initialState, action) => {
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
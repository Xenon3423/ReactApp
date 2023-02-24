import React from 'react';
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/messengerReducer';
import Messenger from './Messenger';


const MessengerContainer = (props) => {
    let state = props.store.getState().messengerPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }   

    return (
        <Messenger updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} messengerPage={state} />
    );
}

export default MessengerContainer;
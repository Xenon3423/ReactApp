import React from 'react';
import { connect } from 'react-redux';
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/messengerReducer';
import Messenger from './Messenger';


let mapStateToProps = (state) => {
    return {
        messengerPage: state.messengerPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {dispatch(sendMessageCreator())},
        sendMessage: (body) => {dispatch(updateNewMessageBodyCreator(body))}
    }
}

const MessengerContainer = connect(mapStateToProps,mapDispatchToProps) (Messenger);

export default MessengerContainer;
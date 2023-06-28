import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/messengerReducer';
import Messenger from './Messenger';


let mapStateToProps = (state) => {
    return {
        messengerPage: state.messengerPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {dispatch(updateNewMessageBodyCreator(body))},
        sendMessage: () => {dispatch(sendMessageCreator())}
    }
}

let AuthRedirectComponent = withAuthRedirect(Messenger);

const MessengerContainer = connect(mapStateToProps,mapDispatchToProps) (AuthRedirectComponent);

export default MessengerContainer;
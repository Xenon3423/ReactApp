import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/messengerReducer';
import Messenger from './Messenger';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        messengerPage: state.messengerPage,
        // isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {dispatch(updateNewMessageBodyCreator(body))},
        sendMessage: () => {dispatch(sendMessageCreator())}
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Messenger);

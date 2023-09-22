import React from 'react';
import classes from './Messenger.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messaage/Message';
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';


const Messenger = (props) => {

    let state = props.messengerPage;

    let MessengerElements = state.MessengerData.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let MessageElements = state.MessageData.map((m) => <Message message={m.message} key={m.id} />);
    let NewMessageBody = state.NewMessageBody;

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    }

    if (!props.isAuth) return <Navigate to={"/login"} />;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>
                {MessengerElements}
            </div>
            <div className={classes.messages}>
                <div>{MessageElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter you Message" />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default Messenger;
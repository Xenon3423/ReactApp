import React from 'react';
import classes from './Messenger.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messaage/Message';
import { Navigate } from "react-router-dom";


const Messenger = (props) => {

    let state = props.messengerPage;

    let MessengerElements = state.MessengerData.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let MessageElements = state.MessageData.map((m) => <Message message={m.message} key={m.id} />);
    let NewMessageBody = state.NewMessageBody;
    
    
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }
    
    if (!props.isAuth) return <Navigate to={"/login"} />;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>
                {MessengerElements}
            </div>
            <div className={classes.messages}>
                <div>{MessageElements}</div>
                <div>
                    <div><textarea value={NewMessageBody} onChange={onNewMessageChange} placeholder='Enter you Message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Messenger;
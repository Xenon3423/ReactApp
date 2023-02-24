import React from 'react';
import classes from './Messenger.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messaage/Message';


const Messenger = (props) => {

    let state = props.messengerPage;

    let MessengerElements = state.MessengerData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
    let MessageElements = state.MessageData.map((message) => <Message message={message.message} />);
    let NewMessageBody = state.NewMessageBody;
    
    
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }   

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
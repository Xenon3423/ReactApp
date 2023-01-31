import React from 'react';
import classes from './Messenger.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messaage/Message';


const Messenger = (props) => {

    let MessengerElements = props.state.MessengerData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
    let MessageElements = props.state.MessageData.map((message) => <Message message={message.message} />);
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>
                {MessengerElements}
            </div>
            <div className={classes.messages}>
                {MessageElements}
            </div>
        </div>
    );
}

export default Messenger;
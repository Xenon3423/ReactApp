import React from 'react';
import classes from './../Messenger.module.css';

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}


export default Message;
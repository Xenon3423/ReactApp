import React from 'react';
import classes from './../Messenger.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/Messenger/' + props.id}>{props.name}</NavLink>
        </div>
    );
}


export default DialogItem;
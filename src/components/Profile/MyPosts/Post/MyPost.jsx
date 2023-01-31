import React from 'react';
import classes from './MyPost.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      {props.message}
      <div> 
      <span>like</span> {props.like}
      </div>
    </div>
  )
}

export default Post;
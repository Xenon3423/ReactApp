import React from 'react';
import Post from './Post/MyPost';
import classes from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostActionCreator} from './../../../redux/state'


const MyPosts = (props) => {
  let newPostElement = React.createRef();
  
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostActionCreator(text));
  }



  let postElements = props.postData.map((post) => <Post message={post.message} like={post.like} />);
    
    return (
        <div className={classes.contentblock}>
          <h3>My post</h3>
          <div>
            <div>
              <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            </div>
            <div>
              <button onClick={ addPost }>Send post</button>
            </div>
          </div>
          <div className={classes.posts}>
            {postElements}
          </div>
        </div>
    )
}

export default MyPosts;
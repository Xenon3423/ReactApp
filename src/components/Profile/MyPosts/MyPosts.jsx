import React from 'react';
import Post from './Post/MyPost';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
  
  let addPost = () => {
    props.addPost();
  }

  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
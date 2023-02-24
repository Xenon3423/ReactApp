import React from 'react';
import Post from './Post/MyPost';
import classes from './MyPosts.module.css';



const MyPosts = (props) => {
  
  let postElements = props.postData.map((post) => <Post message={post.message} like={post.like} />);
  
  let newPostElement = React.createRef();
  
  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
   
    return (
        <div className={classes.contentblock}>
          <h3>My post</h3>
          <div>
            <div>
              <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            </div>
            <div>
              <button onClick={ onAddPost }>Send post</button>
            </div>
          </div>
          <div className={classes.posts}>
            {postElements}
          </div>
        </div>
    )
}

export default MyPosts;
import React from 'react';
import Post from './Post/MyPost';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
  
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }
  let newPostElement = React.createRef();

  let postElements = props.postData.map((post) => <Post message={post.message} like={post.like} />);
    
    return (
        <div className={classes.contentblock}>
          <h3>My post</h3>
          <div>
            <div>
              <textarea ref={newPostElement}></textarea>
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
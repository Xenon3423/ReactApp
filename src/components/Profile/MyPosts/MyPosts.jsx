import React from 'react';
import Post from './Post/MyPost';
import classes from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';



const MyPosts = (props) => {

  let postElements = props.postData.map((post) => <Post message={post.message} like={post.like} />);

  let newPostElement = React.createRef();

  let newPostText = (value) => {
    props.addPost(value.newPostText);
  }

  return (
    <div className={classes.contentblock}>
      <h3>My post</h3>
      <div>
        <AddPostFormRedux onSubmit={newPostText} />
      </div>
      <div className={classes.posts}>
        {postElements}
      </div>
    </div>
  )
}

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostText" />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({ form: "addPostForm" })(AddPostForm);

export default MyPosts;
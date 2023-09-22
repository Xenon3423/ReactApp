import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator} from './../../../redux/profileReducer'
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    postData: state.profilePage.postData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => { dispatch(addPostActionCreator(newPostText)) },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
import React from 'react';
import { connect } from 'react-redux';
import {addPostActionCreator, updateNewPostActionCreator} from './../../../redux/profileReducer'
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    postData: state.profilePage.postData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
      addPost: () => {dispatch(addPostActionCreator())},
      updateNewPostText: (text) => {dispatch(updateNewPostActionCreator(text))}
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
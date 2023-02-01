import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';

const Profile = (props) => {

  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPosts postData={props.profilePage.postData} addPost={props.addPost} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/>
    </div>
  )
}

export default Profile;
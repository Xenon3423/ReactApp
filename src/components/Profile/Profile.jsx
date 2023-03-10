import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  )
}

export default Profile;

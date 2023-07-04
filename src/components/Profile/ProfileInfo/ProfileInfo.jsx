import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './profileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src='https://w.forfun.com/fetch/e4/e441fda4236fde71b191566322d1c072.jpeg'></img>
      </div>
      <div>
        <img src={props.profile.photos.large} /> 
        <img src='https://i.pinimg.com/originals/c4/cf/e2/c4cfe2f99a9392523fdc8fb013874dca.jpg'></img>
      </div>
      <div>
        <ProfileStatus status={"Hellowwwww"} />
      </div>
      <div>
        {props.profile.contacts.facebook}
      </div>
      <div>
        {props.profile.contacts.vk}
      </div>
      <div>
        {props.profile.contacts.twitter}
      </div>
    </div>
  )
}

export default ProfileInfo;
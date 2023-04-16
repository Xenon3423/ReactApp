import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src='https://get.wallhere.com/photo/trees-landscape-sunset-lake-nature-reflection-grass-sky-field-green-morning-Sun-panorama-Pennsylvania-marsh-creek-state-park-wildfire-cloud-agriculture-meadow-prairie-computer-wallpaper-57591.jpg'></img>
      </div>
      <div>
        <img src={props.profile.photos.large} /> 
        <img src='https://i.pinimg.com/originals/c4/cf/e2/c4cfe2f99a9392523fdc8fb013874dca.jpg'></img>
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
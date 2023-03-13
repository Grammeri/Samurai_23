import React from "react";
import Village from "./../../../assets/village.jpg";
import style from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";

type ProfileInfoType = {
  profile: any;
};

export const ProfileInfo = (props: ProfileInfoType) => {
  if (!props.profile) {
    return <Preloader />;
  }
  //debugger
  return (
    <div className={style.profileInfo}>
      <div>
        <img src={Village} />
      </div>
      <div className={style.description}>
        <img src={props.profile.photos.large} />
        avatar + description
      </div>
      <div>
        <div>{props.profile.fullName}</div>
        <div>{props.profile.contacts.facebook}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
      </div>
    </div>
  );
};

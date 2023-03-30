import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import { ProfileType } from "../../../Redux/profileReducer";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
  profile: ProfileType | null;
};

export const ProfileInfo = (props: ProfileInfoType) => {
  if (!props.profile) {
    return <Preloader />;
  }
  //debugger
  return (
    <div className={style.profileInfo}>
      {/* <div>
        <img src={Village} />
      </div>*/}
      <div className={style.description}>
        <img src={props.profile.photos.large} alt={"photo"} />
        <ProfileStatus status={"Hi!"} />
      </div>
      <div>
        <div>{props.profile.fullName}</div>
        <div>{props.profile.contacts.facebook}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
      </div>
    </div>
  );
};

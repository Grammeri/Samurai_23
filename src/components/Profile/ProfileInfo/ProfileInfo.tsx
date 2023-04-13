import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import { ProfileType } from "../../../Redux/profileReducer";
import ProfileStatusWithHooks from "components/Profile/ProfileInfo/ProfileStatusWithHooks";

export const ProfileInfo = ({
  profile,
  status,
  updateStatus,
}: {
  profile: ProfileType | null;
  status: string;
  updateStatus: (status: string) => void;
}) => {
  if (!profile) {
    return <Preloader />;
  }
  //debugger
  return (
    <div className={style.profileInfo}>
      {/* <div>
        <img src={Village} />
      </div>*/}
      <div className={style.description}>
        <img src={profile.photos.large} alt={"photo"} />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
      <div>
        <div>{profile.fullName}</div>
        <div>{profile.contacts.facebook}</div>
        <div>{profile.lookingForAJobDescription}</div>
      </div>
    </div>
  );
};

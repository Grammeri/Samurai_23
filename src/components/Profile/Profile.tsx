import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";
import { ActionsTypes, ProfilePageType } from "../../Redux/dialogReducer";

type ProfilePropsType = {
  profilePage: ProfilePageType;
  dispatch: (action: ActionsTypes) => void;
};

export const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <MyPosts
        profilePage={props.profilePage}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

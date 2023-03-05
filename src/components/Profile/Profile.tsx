import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";
import { ProfilePageType, StoreType } from "../../Redux/state";

type ProfilePropsType = {
  addPost: (/*message: string*/) => void;
  profilePage: ProfilePageType;
  updateNewPostText: (newPostText: string) => void;
  store: StoreType;
};

export const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <MyPosts
        profilePage={props.store.getState().profilePage}
        addPost={props.store.addPost.bind(props.store)}
        newPostText={props.store.getState().profilePage.newPostText}
        updateNewPostText={props.store.updateNewPostText}
      />
    </div>
  );
};

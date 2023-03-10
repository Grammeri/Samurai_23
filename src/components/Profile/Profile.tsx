import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

/*type ProfilePropsType = {
  profilePage: ProfilePageType;
  dispatch: (action: ActionsTypes) => void;
  store: any;
};*/

type ProfilePropsType = {
    profile:any
}

export const Profile = (props:ProfilePropsType) => {
  return (
    <div className={style.profile}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer
      //profilePage={props.profilePage}
      //newPostText={props.profilePage.newPostText}
      //dispatch={props.dispatch}
      //store={props.store}
      />
    </div>
  );
};

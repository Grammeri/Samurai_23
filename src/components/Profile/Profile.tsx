import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

/*type ProfilePropsType = {
  profilePage: ProfilePageType;
  dispatch: (action: ActionsTypes) => void;
  store: any;
};*/

export const Profile: React.FC /*<ProfilePropsType>*/ = () => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <MyPostsContainer
      //profilePage={props.profilePage}
      //newPostText={props.profilePage.newPostText}
      //dispatch={props.dispatch}
      //store={props.store}
      />
    </div>
  );
};

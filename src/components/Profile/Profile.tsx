import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileType } from "../../Redux/profileReducer";

/*type ProfilePropsType = {
  profilePage: ProfilePageType;
  dispatch: (action: ActionsTypes) => void;
  store: any;
};*/

type ProfilePropsType = {
  profile: ProfileType | null;
  updateStatus: string;
  status: string;
};

export const Profile = (props: ProfilePropsType) => {
  //debugger;
  return (
    <div className={style.profile}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer
      //profilePage={props.profilePage}
      //newPostText={props.profilePage.newPostText}
      //dispatch={props.dispatch}
      //store={props.store}
      />
    </div>
  );
};

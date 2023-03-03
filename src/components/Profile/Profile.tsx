import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";
import {ProfilePageType} from "../../Redux/state";

type ProfilePropsType = {
    addPost:(message:string)=>void
    profilePage:ProfilePageType
}

export const Profile:React.FC<ProfilePropsType> = (props) => {

  return (
    <div className={style.profile}>
      <ProfileInfo />
      <MyPosts profilePage={props.profilePage} addPost={props.addPost}/>
    </div>
  );
};

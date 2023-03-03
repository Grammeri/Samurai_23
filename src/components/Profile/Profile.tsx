import React from "react";
import {MyPosts, MyPostsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";


export const Profile:React.FC<MyPostsType> = (props) => {

  return (
    <div className={style.profile}>
      <ProfileInfo />
      <MyPosts profilePage={props.profilePage}/>
    </div>
  );
};

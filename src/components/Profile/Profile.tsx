import React from "react";
import {MyPosts, PostsDataType} from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";


export const Profile:React.FC<PostsDataType> = (props) => {

/*      let postsData = [
    { id: 1, message: "How are you?", likesCount: 15 },
    { id: 2, message: "I am good!", likesCount: 20 },
  ];*/

  return (
    <div className={style.profile}>
      <ProfileInfo />
      <MyPosts postsData={props.postsData}/>
    </div>
  );
};

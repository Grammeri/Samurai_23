import React from "react";
import { Post } from "./Post/Post";
import style from "./MyPosts.module.css";
import {ProfilePageType} from "../../../Redux/state";

export type MyPostsType ={
  profilePage:ProfilePageType
}

export const MyPosts: React.FC<MyPostsType> = (props) => {
/*  let postsData = [
    { id: 1, message: "How are you?", likesCount: 15 },
    { id: 2, message: "I am good!", likesCount: 20 },
  ];*/

  let postsElements = props.profilePage.postsData.map(el=> <Post message={el.message} likesCount={el.likesCount} />)

  return (
    <div className={style.myPosts}>
      <div>
        <h2>My posts</h2>
        <div className={style.textareaAndBtn}>
          <div className={style.textarea}>
            <textarea></textarea>
          </div>
          <div className={style.button}>
            <button>Add post</button>
          </div>
        </div>
      </div>
        {postsElements}
    </div>
  );
};

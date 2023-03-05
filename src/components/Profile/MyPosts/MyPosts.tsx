import React from "react";
import { Post } from "./Post/Post";
import style from "./MyPosts.module.css";
import { ActionsTypes, ProfilePageType } from "../../../Redux/state";

export type MyPostsType = {
  profilePage: ProfilePageType;
  //addPost: (/*message: string*/) => void;
  newPostText: string;
  //updateNewPostText: (newPostText: string) => void;
  dispatch: (action: ActionsTypes) => void;
};

export const MyPosts: React.FC<MyPostsType> = (props) => {
  /*  let postsData = [
        { id: 1, message: "How are you?", likesCount: 15 },
        { id: 2, message: "I am good!", likesCount: 20 },
      ];*/

  let postsElements = props.profilePage.postsData.map((el) => (
    <Post message={el.message} likesCount={el.likesCount} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  /*  let addPost = () => {
    if (newPostElement.current) {
      props.addPost(newPostElement.current?.value);
      //props.updateNewPostText("");
    }
  };*/

  let addNewPost = () => {
    //let text = newPostElement.current?.value as string
    props.dispatch({ type: "ADD-POST" });
  };

  let onPostChangeHandler = () => {
    //console.log(newPostElement.current?.value);
    let action = {
      type: "UPDATE-NEW-POST-TEXT",
      newText: newPostElement.current?.value as string,
    };
    props.dispatch(action);
  };

  return (
    <div className={style.myPosts}>
      <div>
        <h2>My posts</h2>
        <div className={style.textareaAndBtn}>
          <div className={style.textarea}>
            <textarea
              ref={newPostElement}
              value={props.newPostText}
              onChange={onPostChangeHandler}
            />
          </div>
          <div className={style.button}>
            <button onClick={addNewPost}>Add post</button>
          </div>
        </div>
      </div>
      {postsElements}
    </div>
  );
};

import React from "react";
import style from "./MyPosts.module.css";
import {
  AddPostActionCreator,
  UpdateNewPostActionCreator,
} from "../../../Redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { StoreType } from "../../../Redux/reduxStore";
import StoreContext from "../../../StoreContext";

/*export type MyPostsContainerType = {
  //profilePage: ProfilePageType;
  //addPost: (/!*message: string*!/) => void;
  //newPostText: string;
  //updateNewPostText: (newPostText: string) => void;
  //dispatch: (action: ActionsTypes) => void;
  store: StoreType;
};*/

export const MyPostsContainer: React.FC /*<MyPostsContainerType>*/ = () =>
  //props
  {
    /*  let postsData = [
        { id: 1, message: "How are you?", likesCount: 15 },
        { id: 2, message: "I am good!", likesCount: 20 },
      ];*/

    /*  let postsElements = props.profilePage.postsData.map((el) => (
    <Post message={el.message} likesCount={el.likesCount} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();*/

    /*  let addPost = () => {
    if (newPostElement.current) {
      props.addPost(newPostElement.current?.value);
      //props.updateNewPostText("");
    }
  };*/

    //let state = props.store.getState();

    /*  let addNewPost = () => {
    //let text = newPostElement.current?.value as string
    props.store.dispatch(AddPostActionCreator());
  };

  let onPostChangeHandler = (newPost: string) => {
    //console.log(newPostElement.current?.value);
    let action = UpdateNewPostActionCreator(newPost);
    //let newPost = newPostElement.current?.value as string;
    props.store.dispatch(action);
  };*/

    return (
      <StoreContext.Consumer>
        {(store) => {
          let state = store.getState();

          let addNewPost = () => {
            //let text = newPostElement.current?.value as string
            store.dispatch(AddPostActionCreator());
          };

          let onPostChangeHandler = (newPost: string) => {
            //console.log(newPostElement.current?.value);
            let action = UpdateNewPostActionCreator(newPost);
            //let newPost = newPostElement.current?.value as string;
            store.dispatch(action);
          };

          return (
            <MyPosts
              updateNewPostText={onPostChangeHandler}
              addPost={addNewPost}
              profilePage={store.getState().profilePage}
              newPostText={store.getState().profilePage.newPostText}
              //dispatch={props.store.dispatch}
            />
          );
        }}
      </StoreContext.Consumer>
    );
  };

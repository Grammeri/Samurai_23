import React from "react";
import {
  AddPostActionCreator,
  UpdateNewPostActionCreator,
} from "../../../Redux/profileReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { MyPosts } from "./MyPosts";
import { AppStateType } from "../../../Redux/reduxStore";

/*export type MyPostsContainerType = {
  //profilePage: ProfilePageType;
  //addPost: (/!*message: string*!/) => void;
  //newPostText: string;
  //updateNewPostText: (newPostText: string) => void;
  //dispatch: (action: ActionsTypes) => void;
  store: StoreType;
};*/

let mapStateToProps = (state: AppStateType) => {
  return {
    profilePage: state.profilePage,
    // postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addNewPost: () => {
      dispatch(AddPostActionCreator());
    },
    onPostChangeHandler: (newPost: string) => {
      dispatch(UpdateNewPostActionCreator(newPost));
    },
  };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default ProfileContainer;

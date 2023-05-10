import React from "react";
import { AddPostActionCreator } from "Redux/profileReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { MyPosts } from "./MyPosts";
import { RootReducerType } from "Redux/reduxStore";

let mapStateToProps = (state: RootReducerType) => {
  return {
    profilePage: state.profilePage,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addNewPost: (newPostPageText: string) => {
      dispatch(AddPostActionCreator(newPostPageText));
    },
  };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default ProfileContainer;

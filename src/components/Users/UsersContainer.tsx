import React from "react";
import { AppStateType } from "../../Redux/reduxStore";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import {
  followAC,
  InitialStateType,
  setUsersAC,
  unFollowAC,
  UserType,
} from "../../Redux/usersReducer";
import UsersClassComponent from "./UsersClassComponent";

type MapStatePropsType = {
  users: InitialStateType;
};

type mapDispatchToPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: Array<UserType>) => void;
};

export type UsersPropsType = MapStatePropsType & mapDispatchToPropsType;

let mapStateToProps = (state: AppStateType): { users: Array<UserType> } => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: number) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users: Array<UserType>) => {
      dispatch(setUsersAC(users));
    },
  };
};

// @ts-ignore
const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersClassComponent);

export default UsersContainer;

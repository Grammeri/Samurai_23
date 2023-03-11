import React from "react";
import { AppStateType } from "../../Redux/reduxStore";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import {
  followAC,
  InitialStateType,
  setCurrentPageAC,
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

let mapStateToProps = (
  state: AppStateType
): {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  users: Array<UserType>;
} => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDispatchToProps = (
  dispatch: Dispatch
): {
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (pageNumber: number) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
} => {
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
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersClassComponent);

export default UsersContainer;

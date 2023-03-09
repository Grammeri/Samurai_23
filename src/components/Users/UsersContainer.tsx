import React from "react";
import { AppStateType } from "../../Redux/reduxStore";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Users } from "./Users";
import { followAC, setUsersAC, unFollowAC } from "../../Redux/usersReducer";

let mapStateToProps = (state: AppStateType) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: number) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users: any) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

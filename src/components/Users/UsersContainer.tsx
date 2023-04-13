import React from "react";
import { connect } from "react-redux";

import {
  follow,
  requestUsers,
  setCurrentPage,
  toggleFollowingProgress,
  unfollow,
  UserType,
} from "Redux/usersReducer";
import Users from "./Users.tx";
import Preloader from "../Preloader/Preloader";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "Redux/usersSelectors";
import { RootReducerType } from "Redux/reduxStore";

type MapStateToPropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  users: Array<UserType>;
  isFetching: boolean;
  followingInProgress: [];
};

type mapDispatchToPropsType = {
  setTotalUsersCount: (totalUsersCount: number) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (pageNumber: number) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setPreloader: (isFetching: boolean) => void;
  toggleFollowingProgress: (Array: any, userId: number) => void;
};

//export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType;

export class UsersComponent extends React.Component<any> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChange = (pageNumber: number) => {
    const { pageSize } = this.props;
    this.props.getUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? (
          <Preloader /*isFetching={this.props.isFetching}*/ />
        ) : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </div>
    );
  }
}

let mapStateToProps = (state: RootReducerType) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers: requestUsers,
  })
)(UsersComponent);

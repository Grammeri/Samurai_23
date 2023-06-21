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
import styles from "./UsersContainer.module.css";

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
  portionSize: number;
};

export class UsersComponent extends React.Component<any> {
  // 1. Add a new state variable for the currently selected page type.
  state = {
    isFriendsPage: false,
  };
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    // 2. Use the new state variable as an argument when requesting users.
    this.props.getUsers(currentPage, pageSize, this.state.isFriendsPage);
  }

  onPageChange = (pageNumber: number) => {
    const { pageSize } = this.props;
    // 3. Use the new state variable as an argument when requesting users.
    this.props.getUsers(pageNumber, pageSize, this.state.isFriendsPage);
  };

  // 4. Add a new method for handling changes to the page type switch.
  onTogglePageType = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isFriendsPage = event.currentTarget.value === "friends";
    this.setState({ isFriendsPage });
    const { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize, isFriendsPage);
  };
  render() {
    return (
        <div>
          {/* 5. Add a switch (radio buttons) for selecting the page type. */}

          {/*<div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input type="radio" value="all" checked={!this.state.isFriendsPage} onChange={this.onTogglePageType} className={styles.radioInput}/>
              <h2>All Users</h2>
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" value="friends" checked={this.state.isFriendsPage} onChange={this.onTogglePageType} className={styles.radioInput} />
              <h2>My Friends</h2>
            </label>
          </div>*/}
          {this.props.isFetching ? (
              <Preloader />
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
              portionSize={this.props.portionSize}
              isFriendsPage={this.state.isFriendsPage} // Pass new props here
              onTogglePageType={this.onTogglePageType} // And here
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
      getUsers: requestUsers, // Make sure your requestUsers function is updated to take the isFriendsPage parameter
    })
)(UsersComponent);

import React from "react";
import { AppStateType } from "../../Redux/reduxStore";
import { connect } from "react-redux";

import {
  follow,
  setCurrentPage,
  setPreloader,
  setTotalUsersCount,
  setUsers,
  unfollow,
  UserType,
} from "../../Redux/usersReducer";
import axios from "axios";
import Users from "./Users.tx";
import Preloader from "../Preloader/Preloader";

type MapStateToPropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  users: Array<UserType>;
  isFetching: boolean;
};

type mapDispatchToPropsType = {
  setTotalUsersCount: (totalUsersCount: number) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (pageNumber: number) => void;
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  setPreloader: (isFetching: boolean) => void;
};

export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType;

export class UsersComponent extends React.Component<UsersPropsType, []> {
  componentDidMount() {
    this.props.setPreloader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setPreloader(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChange = (pageNumber: number) => {
    this.props.setPreloader(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setPreloader(false);
      });
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
          setCurrentPage={this.props.setCurrentPage}
          setTotalUsersCount={this.props.setTotalUsersCount}
          setUsers={this.props.setUsers}
          isFetching={this.props.isFetching}
          setPreloader={this.props.setPreloader}
        />
      </div>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

/*let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    follow: (userId: string) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: string) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users: Array<UserType>) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount: number) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    setPreloader: (isFetching: boolean) => {
      dispatch(setPreLoadingAC(isFetching));
    },
  };
};*/

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setPreloader,
})(UsersComponent);

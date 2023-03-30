import React from "react";
import {AppStateType} from "../../Redux/reduxStore";
import {connect} from "react-redux";

import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow, UserType,} from "../../Redux/usersReducer";
import Users from "./Users.tx";
import Preloader from "../Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  users: Array<UserType>;
  isFetching: boolean;
  followingInProgress:[]
};

type mapDispatchToPropsType = {
  setTotalUsersCount: (totalUsersCount: number) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (pageNumber: number) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setPreloader: (isFetching: boolean) => void,
  toggleFollowingProgress:(Array:any, userId:number)=>void
};

//export type UsersPropsType = MapStateToPropsType & mapDispatchToPropsType;

export class UsersComponent extends React.Component<any> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
/*    this.props.setPreloader(true);

usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
  //debugger

        this.props.setPreloader(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }*/

  onPageChange = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)

/*    this.props.setPreloader(true);
    this.props.setCurrentPage(pageNumber);
/!*    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
          withCredentials:true,

          }
      )*!/
        usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
        this.props.setUsers(data.items);
        this.props.setPreloader(false);
      });*/
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
          //setCurrentPage={this.props.setCurrentPage}
          //setTotalUsersCount={this.props.setTotalUsersCount}
          //setUsers={this.props.setUsers}
          //isFetching={this.props.isFetching}
          //setPreloader={this.props.setPreloader}
          //toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </div>
    );
  }
}

let mapStateToProps = (state: AppStateType): { followingInProgress: Array<any>; totalUsersCount: number; pageSize: number; isFetching: boolean; currentPage: number; users: Array<UserType> } => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgres
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



export default withAuthRedirect( connect(mapStateToProps, {
  follow,
  unfollow,
 /* setUsers,*/
  setCurrentPage,
  /*setTotalUsersCount,*/
  /*setPreloader,*/
  toggleFollowingProgress,
  getUsers
})(UsersComponent));

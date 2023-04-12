import { RootReducerType } from "Redux/reduxStore";

export const getUsers = (state: RootReducerType) => {
  return state.usersPage.users;
};

export const getPageSize = (state: RootReducerType) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state: RootReducerType) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state: RootReducerType) => {
  return state.usersPage.page;
};

export const getIsFetching = (state: RootReducerType) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: RootReducerType) => {
  return state.usersPage.followingInProgres;
};

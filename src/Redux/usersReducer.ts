import { usersAPI } from "api/api";
import { Dispatch } from "redux";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_PRELOADER = "SET-PRELOADER";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS-FOLLOWING-PROGRESS";

export type UserType = {
  id: number;
  name: string;
  photos: {
    small: string;
    large: string;
  };
  status: string;
  followed: boolean;
};

export type InitialStateType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  page: number;
  isFetching: boolean;
  followingInProgres: Array<any>;
};

export let initialState: InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  page: 1,
  isFetching: true,
  followingInProgres: [], //id of the user to be followed/unfollowed
};


export let usersReducer = (
  state: InitialStateType = initialState,
  action: UsersReducerActionsTypes
): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return <InitialStateType>{
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...action.users /*...state.users*/] }; //склеиваем 2 массива
    }
    case SET_CURRENT_PAGE: {
      return { ...state, page: action.page };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case SET_PRELOADER: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgres: action.isFetching
          ? [...state.followingInProgres, action.userId]
          : state.followingInProgres.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
};

export type FollowSuccessActionType = ReturnType<typeof FollowSuccess>;
export const FollowSuccess = (userId: number) =>
  ({ type: FOLLOW, userId } as const);

export type UnFollowSuccessActionType = ReturnType<typeof UnfollowSuccess>;
export const UnfollowSuccess = (userId: number) =>
  ({ type: UNFOLLOW, userId } as const);

export type SetUsersActionType = ReturnType<typeof setUsers>;
export const setUsers = (users: Array<UserType>) =>
  ({
    type: SET_USERS,
    users,
  } as const);

export type pageActionType = ReturnType<typeof setCurrentPage>;
export const setCurrentPage = (page: number) =>
  ({
    type: SET_CURRENT_PAGE,
    page,
  } as const);

export type TotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>;
export const setTotalUsersCount = (totalUsersCount: number) =>
  ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount,
  } as const);

export type setPreloaderActionType = ReturnType<typeof setPreloader>;
export const setPreloader = (isFetching: boolean) =>
  ({
    type: SET_PRELOADER,
    isFetching,
  } as const);

export type followingInProgressActionType = ReturnType<
  typeof toggleFollowingProgress
>;
export const toggleFollowingProgress = (isFetching: boolean, userId: number) =>
  ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  } as const);

export const requestUsers =
  (page: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
      dispatch(setPreloader(true));
      dispatch(setCurrentPage(page));

      let data = await usersAPI.getUsers(page, pageSize);
      //debugger

      dispatch(setPreloader(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    };
  }

const followUnfollowFlow = async (
  dispatch: Dispatch,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId: number) => {
  return async (dispatch: Dispatch) => {

/*    let apiMethod = usersAPI.postFollow.bind(usersAPI);
    let actionCreator = FollowSuccess;*/
    followUnfollowFlow(dispatch, userId, usersAPI.postFollow.bind(usersAPI), FollowSuccess);

    /*    dispatch(toggleFollowingProgress(true, userId));
        let response = await apiMethod(userId);
        if (response.data.resultCode === 0) {
          dispatch(actionCreator(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      };*/
  };
}

  export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
    /*    let apiMethod = usersAPI.deleteFollow.bind(usersAPI);
        let actionCreator = UnfollowSuccess;*/
    followUnfollowFlow(dispatch, userId, usersAPI.deleteFollow.bind(usersAPI), UnfollowSuccess);
  }

    export type UsersReducerActionsTypes = FollowSuccessActionType
        | UnFollowSuccessActionType
        | SetUsersActionType
        | pageActionType
        | TotalUsersCountActionType
        | setPreloaderActionType
        | followingInProgressActionType


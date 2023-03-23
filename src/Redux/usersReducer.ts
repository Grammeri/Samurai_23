const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_PRELOADER = "SET-PRELOADER";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS-FOLLOWING-PROGRESS";

/*export type LocationType = {
  city: string;
  country: string;
};

export type UserType = {
  id: number;
  followed: boolean;
  fullName: string;
  status: string;
  location: LocationType;
  photo: any;
};*/

/*export type UsersType = {
  users: Array<UserType>;
};*/
export type UserType = {
    id: string;
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
    currentPage: number;
    isFetching: boolean;
    followingInProgres: Array<any>;
};

export let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
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
      return { ...state, currentPage: action.currentPage };
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
                  : state.followingInProgres.filter(id => id != action.userId)};
      }
    default:
      return state;
  }
};

export type FollowActionType = ReturnType<typeof follow>;
export const follow = (userId: string) => ({type: FOLLOW, userId} as const);

export type UnFollowActionType = ReturnType<typeof unfollow>;
export const unfollow = (userId: string) =>
    ({type: UNFOLLOW, userId} as const);

export type SetUsersActionType = ReturnType<typeof setUsers>;
export const setUsers = (users: Array<UserType>) =>
    ({
        type: SET_USERS,
        users,
    } as const);

export type CurrentPageActionType = ReturnType<typeof setCurrentPage>;
export const setCurrentPage = (currentPage: number) =>
    ({
        type: SET_CURRENT_PAGE,
        currentPage,
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

export type followingInProgressActionType = ReturnType<typeof toggleFollowingProgress>;
export const toggleFollowingProgress = (isFetching: boolean, userId:number) =>
    ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    } as const);

export type UsersReducerActionsTypes =
    | FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | CurrentPageActionType
    | TotalUsersCountActionType
    | setPreloaderActionType
    | followingInProgressActionType


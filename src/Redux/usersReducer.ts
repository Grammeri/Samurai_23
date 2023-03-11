import {
  AddNewDialogMessageType,
  SendDialogMessageType,
} from "./dialogReducer";
import { AddPostActionType, UpdateNewPostActionType } from "./profileReducer";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";

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
  id: number;
  name: string;
  photos: {
    small: any;
    large: any;
  };
  status: string;
  followed: boolean;
};

export type InitialStateType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
};

export let initialState: InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 21,
  currentPage: 2,
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
      return { ...state, users: [...state.users, ...action.users] }; //склеиваем 2 массива
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    default:
      return state;
  }
};

export type FollowActionType = ReturnType<typeof followAC>;
export const followAC = (userId: number) => ({ type: FOLLOW, userId } as const);

export type UnFollowActionType = ReturnType<typeof unFollowAC>;
export const unFollowAC = (userId: number) =>
  ({ type: UNFOLLOW, userId } as const);

export type SetUsersActionType = ReturnType<typeof setUsersAC>;
export const setUsersAC = (users: Array<UserType>) =>
  ({
    type: SET_USERS,
    users,
  } as const);

export type CurrentPageActionType = ReturnType<typeof setCurrentPageAC>;
export const setCurrentPageAC = (currentPage: number) =>
  ({
    type: SET_CURRENT_PAGE,
    currentPage,
  } as const);

export type UsersReducerActionsTypes =
  | FollowActionType
  | UnFollowActionType
  | SetUsersActionType
  | CurrentPageActionType;

/*
export let initialState: InitialStateType = {
  users: [
    {
      id: 1,
      followed: false,
      fullName: "Dmitry S.N.",
      status: "busy",
      location: { city: "Houston", country: "USA" },
      photo:
          "https://cdn.dribbble.com/users/3269914/screenshots/10847556/cat-with-a-piece-of-sausage_2x.jpg",
    },
    {
      id: 2,
      followed: false,
      fullName: "Sasha S.N.",
      status: "available",
      location: { city: "Penza", country: "Russia" },
      photo:
          "https://cdn.dribbble.com/users/3269914/screenshots/10847556/cat-with-a-piece-of-sausage_2x.jpg",
    },
    {
      id: 3,
      followed: true,
      fullName: "Liza D.N",
      status: "on vacation",
      location: { city: "Moscow", country: "Russia" },
      photo:
          "https://cdn.dribbble.com/users/3269914/screenshots/10847556/cat-with-a-piece-of-sausage_2x.jpg",
    },
  ],
};*/

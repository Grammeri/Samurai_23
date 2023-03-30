import {
  AddNewDialogMessageType,
  SendDialogMessageType,
} from "./dialogReducer";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {toggleFollowingProgress, UnfollowSuccess} from "./usersReducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

/*export type MessageType = {
  id: number;
  message: string;
};*/

/*export type DialogType = {
  id: number;
  name: string;
};*/

export type PostType = {
  id?: number;
  message: string;
  likesCount: number;
};

export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: {
    github: string;
    vk: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
    facebook: string;
    null: string;
  };
  photos: {
    small: string;
    large: string;
  };
};

export type ProfilePageType = {
  postsData: Array<PostType>;
  newPostText: string;
  profile: ProfileType | null;
};

export type InitialStateType = ProfilePageType;

export let initialState: InitialStateType = {
  postsData: [
    { id: 1, message: "How are you?", likesCount: 15 },
    { id: 2, message: "I am good!", likesCount: 20 },
  ],
  newPostText: "NewPostText",
  profile: null,
};

export let profileReducer = (
  state: InitialStateType = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost: PostType = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
      let stateCopy = { ...state, postsData: [...state.postsData, newPost] };
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      //let stateCopy = { ...state, newPostText: action.newText };
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export type AddPostActionType = ReturnType<typeof AddPostActionCreator>;
export const AddPostActionCreator = () => ({ type: ADD_POST } as const);

export type UpdateNewPostActionType = {
  type: "UPDATE-NEW-POST-TEXT";
  newText: string;
};

export const UpdateNewPostActionCreator = (
  newPost: string
): UpdateNewPostActionType => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: newPost,
  };
};

export type setUserProfileActionType = ReturnType<typeof setUserProfile>;
export const setUserProfile = (profile: ProfileType) =>
  ({ type: SET_USER_PROFILE, profile } as const);

export const getProfile = (userId:number) => {
  return (dispatch:Dispatch)=>{
    usersAPI.getProfile(userId).then((response) => {
      dispatch (setUserProfile(response.data));
    });
  }
}

export type ActionsTypes =
  | AddPostActionType
  | UpdateNewPostActionType
  | AddNewDialogMessageType
  | SendDialogMessageType
  | setUserProfileActionType;

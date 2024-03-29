import {SendDialogMessageType} from "./dialogReducer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE-POST";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS"

export type PostType = {
    id?: number;
    message: string;
    likesCount: number;
};

export type Photos = {
    small?: string;
    large?: string;
}
export type Contacts = {
    github?: string;
    vk?: string;
    instagram?: string;
    twitter?: string;
    website?: string;
    youtube?: string;
    mainLink?: string;
    facebook?: string;
    null?: number;
}
export type ProfileType = {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    aboutMe: string
    contacts?: Contacts;
    photos?: Photos;
};

export type ProfilePageType = {
    postsData: Array<PostType>;
    profile: ProfileType;
    status: string;
    newPostText: string;
};

export type InitialStateType = ProfilePageType;

export let initialState: InitialStateType = {
    postsData: [
        {id: 1, message: "How are you?", likesCount: 15},
        {id: 2, message: "I am good!", likesCount: 20},
    ],
    profile: {} as ProfileType,
    status: "",
    newPostText: "",
};

export let profileReducer = (
    state: InitialStateType = initialState,
    action: ProfileReducerActionsTypes
): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: 3,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: "",
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter((f) => f.id != action.postId),
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}};
        }
        default:
            return state;
    }
};

export type AddPostActionType = ReturnType<typeof AddPostActionCreator>;
export const AddPostActionCreator = (newPostText: string) =>
    ({type: ADD_POST, newPostText} as const);

export type setUserProfileActionType = ReturnType<typeof setUserProfile>;
export const setUserProfile = (profile: ProfileType) =>
    ({type: SET_USER_PROFILE, profile} as const);

export type setStatusActionType = ReturnType<typeof setStatus>;
export const setStatus = (status: string) =>
    ({type: SET_STATUS, status} as const);

export type deletePostActionType = ReturnType<typeof deletePost>;
export const deletePost = (postId: number) =>
    ({type: DELETE_POST, postId} as const);

export type savePhotoSuccessActionType = ReturnType<typeof savePhotoSuccess>;
export const savePhotoSuccess = (photos: Photos) =>
    ({type: SAVE_PHOTO_SUCCESS, photos} as const);

//Thunks
export const getProfile = (userId: number) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

//thunk

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = (file: any) => async (dispatch: Dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0])
    }
};

export type ProfileReducerActionsTypes =
    | AddPostActionType
    | SendDialogMessageType
    | setUserProfileActionType
    | setStatusActionType
    | deletePostActionType
    | savePhotoSuccessActionType

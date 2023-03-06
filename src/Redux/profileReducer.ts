import { PostType, ProfilePageType, RootStateType } from "./state";
import {
  AddNewDialogMessageType,
  SendDialogMessageType,
} from "./dialogReducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

type InitialStateType = ProfilePageType;

const initialState: InitialStateType = { newPostText: "", postsData: [] };

export const profileReducer = (
  state: InitialStateType = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      let newPost: PostType = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export type AddPostActionType = ReturnType<typeof AddPostActionCreator>;
export const AddPostActionCreator = () => ({ type: ADD_POST } as const);

export const UpdateNewPostActionCreator = (
  newPost: string
): UpdateNewPostActionType => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: newPost,
  };
};

export type UpdateNewPostActionType = {
  type: "UPDATE-NEW-POST-TEXT";
  newText: string;
};

export type ActionsTypes =
  | AddPostActionType
  | UpdateNewPostActionType
  | AddNewDialogMessageType
  | SendDialogMessageType;

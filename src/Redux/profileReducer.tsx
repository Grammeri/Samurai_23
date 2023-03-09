import {
  AddNewDialogMessageType,
  FriendsType,
  SendDialogMessageType,
} from "./dialogReducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type MessageType = {
  id: number;
  message: string;
};

export type DialogType = {
  id: number;
  name: string;
};

export type PostType = {
  id?: number;
  message: string;
  likesCount: number;
};

export type ProfilePageType = {
  postsData: Array<PostType>;
  newPostText: string;
};

export type MessagePageType = {
  dialogsData: Array<DialogType>;
  messageData: Array<MessageType>;
  newMessageText: string;
};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: MessagePageType;
  sideBar: FriendsType;
};

export type InitialStateType = ProfilePageType;

export let initialState: InitialStateType = {
  postsData: [
    { id: 1, message: "How are you?", likesCount: 15 },
    { id: 2, message: "I am good!", likesCount: 20 },
  ],
  newPostText: "NewPostText",
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

import { AddPostActionType, UpdateNewPostActionType } from "./profileReducer";

const UPDATE_NEW_DIALOG_MESSAGE = "UPDATE-NEW-DIALOG-MESSAGE";
const SEND_DIALOG_MESSAGE = "SEND-DIALOG-MESSAGE";

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

export type FriendType = {
  id: number;
  name: string;
};

export type FriendsType = {
  friends: Array<FriendType>;
};

export type sideBarType = {
  sideBar: FriendsType;
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

export type InitialStateType = MessagePageType;
export let initialState: InitialStateType = {
  dialogsData: [
    { id: 1, name: "Sasha" },
    { id: 2, name: "Kolya" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Valera" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Dima" },
  ],
  messageData: [
    { id: 1, message: "Good morning!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" },
  ],
  newMessageText: "NewMessageText",
};

export const dialogsReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  let stateCopy = {
    ...state,
  };

  switch (action.type) {
    case UPDATE_NEW_DIALOG_MESSAGE: {
      stateCopy.newMessageText = action.newDialogMessage;
      return stateCopy;
    }

    case SEND_DIALOG_MESSAGE: {
      let newDialogMessage: MessageType = {
        id: 7,
        message: state.newMessageText,
      };

      stateCopy.messageData = [...state.messageData];
      stateCopy.messageData.push(newDialogMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    }

    default:
      return state;
  }
};

export type AddNewDialogMessageType = ReturnType<
  typeof AddNewDialogMessageActionCreator
>;
export const AddNewDialogMessageActionCreator = (newDialogMessage: string) =>
  ({ type: UPDATE_NEW_DIALOG_MESSAGE, newDialogMessage } as const);

export type SendDialogMessageType = ReturnType<
  typeof SendDialogMessageActionCreator
>;

export const SendDialogMessageActionCreator = () =>
  ({ type: SEND_DIALOG_MESSAGE } as const);

export type ActionsTypes =
  | AddPostActionType
  | UpdateNewPostActionType
  | AddNewDialogMessageType
  | SendDialogMessageType;

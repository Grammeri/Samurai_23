import { AddPostActionType, profileReducer } from "./profileReducer";
import {
  AddNewDialogMessageType,
  dialogsReducer,
  SendDialogMessageType,
} from "./dialogReducer";
import { sideBarReducer } from "./sidebarReducer";

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

/*export type sideBarType = {
  sideBar: FriendsType;
};*/

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

export type StoreType = {
  state: RootStateType;
  callSubscriber: (store: StoreType) => void;
  subscribe: (observer: (store: StoreType) => void) => void;
  getState: () => RootStateType;
  dispatch: (actions: ActionsTypes) => void;
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

export let store: StoreType = {
  state: {
    profilePage: {
      postsData: [
        { id: 1, message: "How are you?", likesCount: 15 },
        { id: 2, message: "I am good!", likesCount: 20 },
      ],
      newPostText: "NewPostText",
    },
    dialogsPage: {
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
    },
    sideBar: {
      friends: [
        { id: 1, name: "Andrew" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Sveta" },
      ],
    },
  },

  getState() {
    return this.state;
  },

  subscribe(observer) {
    this.callSubscriber = observer; //patern == addEventListener == publisher subscriber
  },
  callSubscriber(store: StoreType) {
    //rerenderEntireTree
    console.log("State changed");
  },

  dispatch(action) {
    this.state.profilePage = profileReducer(this.state.profilePage, action);
    this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action);
    this.state.sideBar = sideBarReducer(this.state.sideBar, action);

    this.callSubscriber(store);
  },
};

// @ts-ignore
window.store = store;

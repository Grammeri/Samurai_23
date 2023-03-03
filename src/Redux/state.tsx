import { rerenderEntireTree } from "../render";

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

export type ProfilePageType = {
  postsData: Array<PostType>;
};

export type MessagePageType = {
  dialogsData: Array<DialogType>;
  messageData: Array<MessageType>;
};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: MessagePageType;
  stateBar: FriendsType;
};

export const state: RootStateType = {
  profilePage: {
    postsData: [
      { id: 1, message: "How are you?", likesCount: 15 },
      { id: 2, message: "I am good!", likesCount: 20 },
    ],
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
  },
  stateBar: {
    friends: [
      { id: 1, name: "Andrew" },
      { id: 2, name: "Sasha" },
      { id: 3, name: "Sveta" },
    ],
  },
};

export let addPost = (postMessage: string) => {
  debugger;
  let newPost: PostType = { id: 3, message: postMessage, likesCount: 0 };

  state.profilePage.postsData.push(newPost);
  rerenderEntireTree();
};

import { AddPostActionType, UpdateNewPostActionType } from "./profileReducer";
import {
  AddNewDialogMessageType,
  SendDialogMessageType,
} from "./dialogReducer";

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

/*type InitialStateType = FriendsType;

const initialState: InitialStateType = { friends: [] };*/

export type InitialStateType = FriendsType;
export let initialState: InitialStateType = {
  friends: [
    { id: 1, name: "Andrew" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Sveta" },
  ],
};

export const sideBarReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  return state;
};

export type ActionsTypes =
  | AddPostActionType
  | UpdateNewPostActionType
  | AddNewDialogMessageType
  | SendDialogMessageType;

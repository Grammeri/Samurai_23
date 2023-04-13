import { AddPostActionType } from "./profileReducer";
import { SendDialogMessageType } from "./dialogReducer";

export type FriendType = {
  id: number;
  name: string;
};

export type FriendsType = {
  friends: Array<FriendType>;
};

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
  action: SideBarReducerActionsTypes
): InitialStateType => {
  return state;
};

export type SideBarReducerActionsTypes =
  | AddPostActionType
  | SendDialogMessageType;

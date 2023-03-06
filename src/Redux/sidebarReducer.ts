import { FriendsType } from "./state";
import { AddPostActionType, UpdateNewPostActionType } from "./profileReducer";
import {
  AddNewDialogMessageType,
  SendDialogMessageType,
} from "./dialogReducer";

type InitialStateType = FriendsType;

const initialState: InitialStateType = { friends: [] };

export const sideBarReducer = (
  state: InitialStateType,
  action: ActionsTypes
): InitialStateType => {
  return state;
};

export type ActionsTypes =
  | AddPostActionType
  | UpdateNewPostActionType
  | AddNewDialogMessageType
  | SendDialogMessageType;

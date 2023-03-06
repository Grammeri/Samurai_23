import { DialogType, MessagePageType, MessageType } from "./state";
import { AddPostActionType, UpdateNewPostActionType } from "./profileReducer";

const UPDATE_NEW_DIALOG_MESSAGE = "UPDATE-NEW-DIALOG-MESSAGE";
const SEND_DIALOG_MESSAGE = "SEND-DIALOG-MESSAGE";

type InitialStateType = MessagePageType;

export const initialState: InitialStateType = {
  dialogsData: [],
  messageData: [],
  newMessageText: "",
};

export const dialogsReducer = (
  state: InitialStateType,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case UPDATE_NEW_DIALOG_MESSAGE:
      state.newMessageText = action.newDialogMessage;
      return state;
    case SEND_DIALOG_MESSAGE:
      let newDialogMessage: MessageType = {
        id: 7,
        message: state.newMessageText,
      };

      state.messageData.push(newDialogMessage);
      state.newMessageText = "";
      return state;
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


const SEND_DIALOG_MESSAGE = "SEND-DIALOG-MESSAGE";

export type DialogType = {
  id: number;
  name: string;
};

export type MessageType = {
  id: number;
  message: string;
};

export type MessagePageType = {
  dialogsData: Array<DialogType>;
  messageData: Array<MessageType>;
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
};

export const dialogsReducer = (
  state = initialState,
  action: DialogsReducerActionsTypes
): InitialStateType => {
  switch (action.type) {
    case SEND_DIALOG_MESSAGE: {
      return {
        ...state,
        messageData: [
          ...state.messageData,
          {
            id: 7,
            message: action.newMessageDialogsPageText,
          },
        ],
      };
    }

    default:
      return state;
  }
};

export type SendDialogMessageType = ReturnType<
  typeof SendDialogMessageActionCreator
>;

export const SendDialogMessageActionCreator = (
  newMessageDialogsPageText: string
) => ({ type: SEND_DIALOG_MESSAGE, newMessageDialogsPageText } as const);

export type DialogsReducerActionsTypes = SendDialogMessageType;

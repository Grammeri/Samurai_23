import {AddPostActionType} from "./profileReducer";

/*const UPDATE_NEW_DIALOG_MESSAGE = "UPDATE-NEW-DIALOG-MESSAGE";*/
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
        {id: 1, name: "Sasha"},
        {id: 2, name: "Kolya"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Valera"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Dima"},
    ],
    messageData: [
        {id: 1, message: "Good morning!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"},
    ],
    //newMessageText: "NewMessageText",
};

export const dialogsReducer = (
    state = initialState,
    action: DialogsReducerActionsTypes
): InitialStateType => {
    switch (action.type) {
        /*        case UPDATE_NEW_DIALOG_MESSAGE: {
                    return {
                        ...state,
                        newMessageText: action.newDialogMessage,
                    };
                }*/

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

/*export type AddNewDialogMessageType = ReturnType<typeof AddNewDialogMessageActionCreator>;
export const AddNewDialogMessageActionCreator = (newDialogMessage: string) =>
    ({type: UPDATE_NEW_DIALOG_MESSAGE, newDialogMessage} as const);*/

export type SendDialogMessageType = ReturnType<typeof SendDialogMessageActionCreator>;

export const SendDialogMessageActionCreator = (newMessageDialogsPageText: string) =>
    ({type: SEND_DIALOG_MESSAGE, newMessageDialogsPageText} as const);

export type DialogsReducerActionsTypes =
/* | AddNewDialogMessageType*/
    | SendDialogMessageType;

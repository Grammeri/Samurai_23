import React from "react";
import style from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagePageType,} from "Redux/dialogReducer";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";

export type DialogsPropsType = {
    dialogsPage: MessagePageType;
    updateDialogsTextAreaText: (text: string) => void;
    sendMessage: (values:string) => void;
    isAuth: boolean
};

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialog = props.dialogsPage.dialogsData.map(
        (dialog: { name: string; id: number }) => (
            <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
        )
    );
    let message = props.dialogsPage.messageData.map(
        (m: { message: string; id: number }) => (
            <Message key={m.id} message={m.message}/>
        )
    );

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageDialogsPageText)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>{dialog}</div>
            <div className={style.messages}>{message}</div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};


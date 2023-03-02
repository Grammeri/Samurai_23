import React from "react";
import style from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DilogItem";

export type dialogsType = {
    id: number
    name: string
}

export type dialogsDataType = {
    dialogsData: Array<dialogsType>
    messageData: Array<messageType>
}

export type messageType = {
    id: number
    message: string
}


export const Dialogs = (props: dialogsDataType) => {
    /*  let dialogsData = [
        { id: 1, name: "Sasha" },
        { id: 2, name: "Kolya" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Valera" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Dima" },
      ];*/

    let dialog = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)


    /* let messageData = [
       { id: 1, message: "Good morning!" },
       { id: 2, message: "How are you?" },
       { id: 3, message: "Yo" },
       { id: 4, message: "Yo" },
       { id: 5, message: "Yo" },
       { id: 6, message: "Yo" },
     ];*/

    let message = props.messageData.map(m => <Message message={m.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialog}
            </div>
            <div className={style.messages}>
                {message}
            </div>
        </div>
    );
};

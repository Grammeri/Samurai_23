import React from "react";
import style from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogType, MessageType} from "../../Redux/state";

type DialogsPropsType = {
    dialogsData:Array<DialogType>
    messageData:Array<MessageType>
}

export const Dialogs = (props:DialogsPropsType ) => {

    let dialog = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
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

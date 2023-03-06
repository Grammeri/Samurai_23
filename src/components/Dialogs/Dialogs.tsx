import React, { ChangeEvent } from "react";
import style from "./Dialogs.module.css";
import { Message } from "./Message/Message";
import { DialogItem } from "./DialogItem/DialogItem";
import { DialogType, MessageType, StoreType } from "../../Redux/state";
import {
  AddNewDialogMessageActionCreator,
  SendDialogMessageActionCreator,
} from "../../Redux/dialogReducer";

type DialogsPropsType = {
  dialogsData: Array<DialogType>;
  messageData: Array<MessageType>;
  store: StoreType;
};

export const Dialogs = (props: DialogsPropsType) => {
  let dialog = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let message = props.messageData.map((m) => <Message message={m.message} />);
  let newMessageDialogsPageText =
    props.store.getState().dialogsPage.newMessageText;

  let dialogBtnHandler = () => {
    props.store.dispatch(SendDialogMessageActionCreator());
  };

  let dialogsTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.store.dispatch(AddNewDialogMessageActionCreator(e.target.value));
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialog}</div>
      <div className={style.messages}>{message}</div>
      <div className={style.messageTextarea}>
        <textarea
          onChange={dialogsTextAreaHandler}
          value={props.store.getState().dialogsPage.newMessageText}
          placeholder={"Enter your message"}
        ></textarea>
        <button onClick={dialogBtnHandler} className={style.messageButton}>
          Send
        </button>
      </div>
    </div>
  );
};

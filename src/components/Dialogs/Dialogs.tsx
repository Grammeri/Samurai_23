import React, { ChangeEvent } from "react";
import style from "./Dialogs.module.css";
import { Message } from "./Message/Message";
import { DialogItem } from "./DialogItem/DialogItem";
import {
  ActionsTypes,
  AddNewDialogMessageActionCreator,
  DialogType,
  MessagePageType,
  RootStateType,
  SendDialogMessageActionCreator,
} from "../../Redux/dialogReducer";

type DialogsPropsType = {
  dispatch: (action: ActionsTypes) => void;
  dialogsPage: MessagePageType;
};

export const Dialogs = (props: DialogsPropsType) => {
  let dialog = props.dialogsPage.dialogsData.map(
    (dialog: { name: string; id: number }) => (
      <DialogItem name={dialog.name} id={dialog.id} />
    )
  );
  let message = props.dialogsPage.messageData.map((m: { message: string }) => (
    <Message message={m.message} />
  ));
  /*  let newMessageDialogsPageText =
    props.store.getState()
        .dialogsPage.newMessageText;*/

  let dialogBtnHandler = () => {
    props.dispatch(SendDialogMessageActionCreator());
  };

  let dialogsTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(AddNewDialogMessageActionCreator(e.target.value));
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialog}</div>
      <div className={style.messages}>{message}</div>
      <div className={style.messageTextarea}>
        <textarea
          onChange={dialogsTextAreaHandler}
          value={props.dialogsPage.newMessageText}
          placeholder={"Enter your message"}
        ></textarea>
        <button onClick={dialogBtnHandler} className={style.messageButton}>
          Send
        </button>
      </div>
    </div>
  );
};

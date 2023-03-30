import React, {ChangeEvent} from "react";
import style from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagePageType,} from "../../Redux/dialogReducer";
import {Redirect} from "react-router-dom";

type DialogsPropsType = {
  // dispatch: (action: DialogsReducerActionsTypes) => void;
  dialogsPage: MessagePageType;
  updateDialogsTextAreaText: (text: string) => void;
  sendMessage: () => void;
  isAuth:boolean
  // postsData: Array<PostType>;
};

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
  let dialog = props.dialogsPage.dialogsData.map(
    (dialog: { name: string; id: number }) => (
      <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
    )
  );
  let message = props.dialogsPage.messageData.map(
    (m: { message: string; id: number }) => (
      <Message key={m.id} message={m.message} />
    )
  );
  let newMessageDialogsPageText = props.dialogsPage.newMessageText;

  let dialogBtnHandler = () => {
    props.sendMessage();
    //props.dispatch(SendDialogMessageActionCreator());
  };

  let dialogsTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let newDialogsTextAreaText = e.target.value;
    props.updateDialogsTextAreaText(newDialogsTextAreaText);
    //props.dispatch(AddNewDialogMessageActionCreator(e.target.value));
  };

  if(!props.isAuth){
    return <Redirect to={"/login"}/>
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialog}</div>
      <div className={style.messages}>{message}</div>
      <div className={style.messageTextarea}>
        <textarea
          onChange={dialogsTextAreaHandler}
          value={newMessageDialogsPageText}
          placeholder={"Enter your message"}
        ></textarea>
        <button onClick={dialogBtnHandler} className={style.messageButton}>
          Send
        </button>
      </div>
    </div>
  );
};



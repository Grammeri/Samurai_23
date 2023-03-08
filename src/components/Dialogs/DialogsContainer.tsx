import React from "react";
import style from "./Dialogs.module.css";
import {
  ActionsTypes,
  AddNewDialogMessageActionCreator,
  SendDialogMessageActionCreator,
} from "../../Redux/dialogReducer";
import {Dialogs} from "./Dialogs";
import {StoreType} from "../../Redux/reduxStore";

type DialogsPropsType = {
  //dispatch: (action: ActionsTypes) => void;
  //dialogsPage: MessagePageType;
  store:StoreType
};

export const DialogsContainer = (props: DialogsPropsType) => {
  /*let dialog = props.dialogsPage.dialogsData.map(
    (dialog: { name: string; id: number }) => (
      <DialogItem name={dialog.name} id={dialog.id} />
    )
  );
  let message = props.dialogsPage.messageData.map((m: { message: string }) => (
    <Message message={m.message} />
  ));*/
  /*  let newMessageDialogsPageText =
    props.store.getState()
        .dialogsPage.newMessageText;*/

  let dialogBtnHandler = () => {
    props.store.dispatch(SendDialogMessageActionCreator());
  };

  let dialogsTextAreaHandler = (newDialogsTextAreaText:any) => {
    props.store.dispatch(AddNewDialogMessageActionCreator(newDialogsTextAreaText));
  };

  return (
    <div className={style.dialogs}>
      <Dialogs updateDialogsTextAreaText={dialogsTextAreaHandler}
               dialogsPage={props.store.getState().dialogsPage}
               sendMessage={dialogBtnHandler}
               dispatch={props.store.dispatch}/>
    </div>
  );
};

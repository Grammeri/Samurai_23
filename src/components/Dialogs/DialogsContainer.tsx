import React from "react";
import style from "./Dialogs.module.css";
import {
  ActionsTypes,
  AddNewDialogMessageActionCreator,
  SendDialogMessageActionCreator,
} from "../../Redux/dialogReducer";
import { Dialogs } from "./Dialogs";
import { StoreType } from "../../Redux/reduxStore";
import StoreContext from "../../StoreContext";

type DialogsPropsType = {
  //dispatch: (action: ActionsTypes) => void;
  //dialogsPage: MessagePageType;
  //store: StoreType;
};

export const DialogsContainer = (/*props: DialogsPropsType*/) => {
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

  /*  let dialogBtnHandler = () => {
    props.store.dispatch(SendDialogMessageActionCreator());
  };

  let dialogsTextAreaHandler = (newDialogsTextAreaText: any) => {
    props.store.dispatch(
      AddNewDialogMessageActionCreator(newDialogsTextAreaText)
    );
  };*/

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let dialogBtnHandler = () => {
          store.dispatch(SendDialogMessageActionCreator());
        };

        let dialogsTextAreaHandler = (newDialogsTextAreaText: any) => {
          store.dispatch(
            AddNewDialogMessageActionCreator(newDialogsTextAreaText)
          );
        };

        return (
          <Dialogs
            updateDialogsTextAreaText={dialogsTextAreaHandler}
            dialogsPage={store.getState().dialogsPage}
            sendMessage={dialogBtnHandler}
            dispatch={store.dispatch}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

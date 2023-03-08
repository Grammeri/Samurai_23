import React from "react";
import {
  AddNewDialogMessageActionCreator,
  SendDialogMessageActionCreator,
} from "../../Redux/dialogReducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { Dispatch } from "redux";

/*type DialogsPropsType = {
  dispatch: (action: ActionsTypes) => void;
  dialogsPage: MessagePageType;
  store: StoreType;
};*/

let mapStateToProps = (state: any) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateDialogsTextAreaText: () => {
      dispatch(SendDialogMessageActionCreator());
    },
    sendMessage: (newDialogsTextAreaText: string) => {
      dispatch(AddNewDialogMessageActionCreator(newDialogsTextAreaText));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

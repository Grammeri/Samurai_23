import React from "react";
import {
  AddNewDialogMessageActionCreator,
  RootStateType,
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

let mapStateToProps = (state: RootStateType) => {
  return {
    dialogsPage: state.dialogsPage, //это попадает в Dialogs
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    sendMessage: () => {
      dispatch(SendDialogMessageActionCreator());
    },
    updateDialogsTextAreaText: (text: string) => {
      dispatch(AddNewDialogMessageActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

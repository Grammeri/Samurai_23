import React from "react";
import { SendDialogMessageActionCreator } from "Redux/dialogReducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import { RootReducerType } from "Redux/reduxStore";

let mapStateToProps = (state: RootReducerType) => {
  return {
    dialogsPage: state.dialogsPage, //this goes to Dialogs
     };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    sendMessage: (newMessageDialogsPageText: string) => {
      dispatch(SendDialogMessageActionCreator(newMessageDialogsPageText));
    },
  };
};

// export type AuthRedirectComponentPropsType = {
//
// }
compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);


export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

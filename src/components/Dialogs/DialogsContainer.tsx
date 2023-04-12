import React from "react";
import { SendDialogMessageActionCreator } from "Redux/dialogReducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import { RootReducerType } from "Redux/reduxStore";

/*type DialogsPropsType = {
  dispatch: (action: ActionsTypes) => void;
  dialogsPage: MessagePageType;
  store: StoreType;
};*/

let mapStateToProps = (state: RootReducerType) => {
  return {
    dialogsPage: state.dialogsPage, //это попадает в Dialogs
    //isAuth: state.auth.isAuth
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    sendMessage: (newMessageDialogsPageText: string) => {
      dispatch(SendDialogMessageActionCreator(newMessageDialogsPageText));
    },
    /*    updateDialogsTextAreaText: (text: string) => {
      dispatch(AddNewDialogMessageActionCreator(text));
    },*/
  };
};

// export type AuthRedirectComponentPropsType = {
//
// }
compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

/*    (props:DialogsPropsType) =>{
  if(!this.props.isAuth){
    return <Redirect to={"/login"}/>
  }
  return <Dialogs {...props}/>
}*/
/*let AuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);*/

//export default DialogsContainer;
export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

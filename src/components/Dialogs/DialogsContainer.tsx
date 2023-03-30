import React from "react";
import {
  AddNewDialogMessageActionCreator,
  SendDialogMessageActionCreator,
} from "../../Redux/dialogReducer";
import { Dialogs, DialogsPropsType } from "./Dialogs";
import { connect } from "react-redux";
import { compose, Dispatch } from "redux";
import { AppStateType } from "../../Redux/reduxStore";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

/*type DialogsPropsType = {
  dispatch: (action: ActionsTypes) => void;
  dialogsPage: MessagePageType;
  store: StoreType;
};*/

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage, //это попадает в Dialogs
    //isAuth: state.auth.isAuth
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

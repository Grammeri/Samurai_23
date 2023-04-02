import React from "react";
import style from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagePageType,} from "../../Redux/dialogReducer";
import {Field, reduxForm} from "redux-form";

export type DialogsPropsType = {
    // dispatch: (action: DialogsReducerActionsTypes) => void;
    dialogsPage: MessagePageType;
    updateDialogsTextAreaText: (text: string) => void;
    sendMessage: (values:string) => void;
    isAuth: boolean
    // postsData: Array<PostType>;
};

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialog = props.dialogsPage.dialogsData.map(
        (dialog: { name: string; id: number }) => (
            <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
        )
    );
    let message = props.dialogsPage.messageData.map(
        (m: { message: string; id: number }) => (
            <Message key={m.id} message={m.message}/>
        )
    );
    /*let newMessageDialogsPageText = props.dialogsPage.newMessageText;*/

/*    let dialogBtnHandler = () => {
        props.sendMessage();
        //props.dispatch(SendDialogMessageActionCreator());
    };*/

/*    let dialogsTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newDialogsTextAreaText = e.target.value;
        props.updateDialogsTextAreaText(newDialogsTextAreaText);
        //props.dispatch(AddNewDialogMessageActionCreator(e.target.value));
    };*/

    /*  if(props.isAuth){
        return <Redirect to={"/login"}/>
      }*/

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageDialogsPageText)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>{dialog}</div>
            <div className={style.messages}>{message}</div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};

type AddMessageFormType = {
    handleSubmit: any
}

export const AddMessageForm = (props: AddMessageFormType) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.messageTextarea}>
            <Field placeholder={"Enter your message"} component={"textarea"} name={"newMessageDialogsPageText"}
            />
            <button className={style.messageButton}>
                Send
            </button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"

})(AddMessageForm)

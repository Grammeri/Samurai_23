import style from "./../Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "components/FormsControls/FormsControls";
import {maxLengthCreator, required} from "utils/validators/validators";
import React from "react";

type AddMessageFormType = {
    handleSubmit: any
}

const maxLength50 =  maxLengthCreator(50)

export const AddMessageForm = (props: AddMessageFormType) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.messageTextarea}>
            <Field placeholder={"Enter your message"} component={Textarea} name={"newMessageDialogsPageText"}
                   validate={[required, maxLength50]}
            />
            <button className={style.messageButton}>
                Send
            </button>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"

})(AddMessageForm)
import React from "react";
import {createField, Input, Textarea} from "components/FormsControls/FormsControls";
import styles from "../../../components/FormsControls/FormsControls.module.css"
import {InjectedFormProps, reduxForm} from "redux-form";
import {Contacts, ProfileType} from "Redux/profileReducer";

/*export type ProfileDataFormType = {
    profile: ProfileType
    goToEditMode:any
}*/

type FormData = {
    fullName: string
    lookingForAJob:boolean
    lookingForAJobDescription: string
    aboutMe: string
    contacts: Contacts
}

type Props = {
    profile: ProfileType
}

type AllProps =  InjectedFormProps<FormData, Props> & Props

const ProfileDataForm = ({handleSubmit, profile, error}:AllProps) => {
    return (

        <form onSubmit={handleSubmit}>
            <button>Save</button>
            {error && <div className={styles.formSummaryError}>{error}</div>}

            <div>
                <b>Full name</b>: {createField("Full name",
                "fullName",
                [],
                Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField(null,
                "lookingForAJob",
                [],
                Input, {type: "checkbox"})}
            </div>

            <div>
                <b>My professional skills</b> :
                {createField("My professional skills",
                    "lookingForAJobDescription",
                    [],
                    Textarea)}
            </div>

            <b>About me</b>:
            {createField("About me",
                "aboutMe",
                [],
                Textarea)}

            <b>Contacts</b>: {Object.keys(profile?.contacts || {}).map(key => {
            /*  return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/
            return <div key={key} className={styles.contact}>
                <b>{key}: {createField(key,"contacts."+key, [], Input)}</b>
            </div>
        })}
        </form>

    )
}

const ProfileDataFormReduxForm = reduxForm<FormData, Props>({
    form: "edit-profile",
})(ProfileDataForm);

export default ProfileDataFormReduxForm
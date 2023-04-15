import React from "react";
import {createField, Input, Textarea} from "components/FormsControls/FormsControls";
import styles from "../../../components/FormsControls/FormsControls.module.css"
import {reduxForm} from "redux-form";

/*export type ProfileDataFormType = {
    profile: ProfileType
    goToEditMode:any
}*/

const ProfileDataForm = ({handleSubmit, profile, error, ...props}: { handleSubmit: any, profile: any, error:any, props: any }) => {
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

            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            /*  return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/
            return <div key={key} className={styles.contact}>
                <b>{key}: {createField(key,"contacts."+key, [], Input)}</b>
            </div>
        })}
        </form>

    )
}

const ProfileDataFormReduxForm = reduxForm({
    form: "edit-profile",
})(ProfileDataForm);

export default ProfileDataFormReduxForm
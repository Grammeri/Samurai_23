import React from "react";
import {createField, Input, Textarea} from "components/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

/*export type ProfileDataFormType = {
    profile: ProfileType
    goToEditMode:any
}*/

const ProfileDataForm = ({handleSubmit, }:{handleSubmit:any}) => {
    return (

             <form onSubmit={handleSubmit}>
                <button>Save</button>

            <div>
                <b>Full name</b>: {createField( "Full name",
                "fullName",
                [],
               Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField( null,
                    "lookingForAJob",
                    [],
                    Input, {type:"checkbox"})}
            </div>

                <div>
                    <b>My professional skills</b> :
                    {createField( "My professional skills",
                        "lookingForAJobDescription",
                        [],
                        Textarea)}
                </div>

            <b>About me</b>:
                 {createField( "About me",
                     "aboutMe",
                     [],
                     Textarea)}

              {/*  <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}*/}
            </form>

    )
}

const ProfileDataFormReduxForm = reduxForm({
    form: "edit-profile",
})(ProfileDataForm);

export default ProfileDataFormReduxForm
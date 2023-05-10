import React, {ChangeEvent, MouseEventHandler, useState} from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "components/Preloader/Preloader";
import {ProfileType} from "Redux/profileReducer";
import ProfileStatusWithHooks from "components/Profile/ProfileInfo/ProfileStatusWithHooks";
import Person from "assets/person.jpg";
import ProfileDataForm from "components/Profile/ProfileInfo/ProfileDataForm.";
import Camera from "assets/camera.webp";



export const ProfileInfo = ({
                                profile,
                                status,
                                updateStatus,
                                isOwner,
                                savePhoto,
                                saveProfile
                            }: {
    profile: ProfileType;
    status: string;
    updateStatus: (status: string) => void;
    isOwner: boolean
    savePhoto: any
    saveProfile: any
}) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>;
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length){
                savePhoto(e.target.files[0])
            }
    }
    const onSubmit = (formData: any) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })


    };

    return (
        <div className={style.profileInfo}>
            {/* <div>
        <img src={Village} />
      </div>*/}
            <div className={style.description}>
                <div className={style.photo}>
                    <img
                        src={profile.photos?.large || Person}
                        alt={"photo"}
                        className={style.mainPhoto}
                    />
                </div>

                {isOwner && <><input id="fileInput" style={{display: "none"}} type={"file"}
                                     onChange={onMainPhotoSelected}/><label className={style.upLoadPhoto} htmlFor="fileInput">
                  <img src={Camera}/>
                </label></>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}
            </div>
        </div>
    )
};

type ProfileDataPropsType = {
    goToEditMode: MouseEventHandler<HTMLButtonElement> | undefined
    profile: any
    isOwner: boolean
}

const ProfileData = (props: ProfileDataPropsType) => {
    return (
        <div className={style.personalInfo}>
            {props.isOwner && <div>

            </div>}
            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? "Yes" : "No"}
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b> : {props.profile.lookingForAJobDescription}
                </div>
            }
            <div className={style.contacts}>
                <div className={style.contactsBlock}>
                    <h3>Contacts:</h3> {Object.keys(props.profile.contacts ||{}).map(key => {
                    return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}
                    <button onClick={props.goToEditMode}>Click to edit data</button>
                </div>
            </div>
        </div>
    )
}


export const Contacts = ({contactTitle, contactValue}: { contactTitle: string, contactValue: string }) => {
    return (
        <div className={style.contact}>
            <b>{contactTitle}</b>:<span className={style.contactValue}>{contactValue}</span>
        </div>
    )
}
import React, {ChangeEvent, useState} from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import {ProfileType} from "../../../Redux/profileReducer";
import ProfileStatusWithHooks from "components/Profile/ProfileInfo/ProfileStatusWithHooks";
import Cat from "../../../assets/cat.jpg";
import ProfileDataForm from "components/Profile/ProfileInfo/ProfileDataForm.";


export const ProfileInfo = ({
                                profile,
                                status,
                                updateStatus,
                                isOwner,
                                savePhoto,
                                saveProfile
                            }: {
    profile: ProfileType | null;
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
        if (e.target.files)
            if (e.target.files.length) {
                savePhoto(e.target.files[0])
            }
    }
    const onSubmit =  (formData: any) => {
      saveProfile(formData).then(()=>{
          setEditMode(false)
      })


    };
    //debugger
    // @ts-ignore
    return (
        <div className={style.profileInfo}>
            {/* <div>
        <img src={Village} />
      </div>*/}
            <div className={style.description}>
                <img
                    src={profile.photos.large || Cat}
                    alt={"photo"}
                    className={style.mainPhoto}
                />
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}


                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
};

type ProfileDataPropsType = {
    goToEditMode: any
    profile: any
    isOwner: boolean
}

const ProfileData = (props: ProfileDataPropsType) => {
    return (
        <div>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>Edit</button>
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
            {/*<b>About me{profile.aboutMe}</b>*/}
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}


export const Contacts = ({contactTitle, contactValue}: { contactTitle: string, contactValue: string }) => {
    return (
        <div className={style.contact}>
            <b>{contactTitle}</b>:{contactValue}
        </div>
    )
}
import React, {ChangeEvent, ChangeEventHandler} from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import {ProfileType} from "../../../Redux/profileReducer";
import ProfileStatusWithHooks from "components/Profile/ProfileInfo/ProfileStatusWithHooks";
import Cat from "../../../assets/cat.jpg";

export const ProfileInfo = ({
                                profile,
                                status,
                                updateStatus,
                                isOwner,
                                savePhoto,
                            }: {
    profile: ProfileType | null;
    status: string;
    updateStatus: (status: string) => void;
    isOwner: boolean
    savePhoto: any
}) => {
    if (!profile) {
        return <Preloader/>;
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files)
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    //debugger
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
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div>
                <div>{profile.fullName}</div>
                <div>{profile.contacts.facebook}</div>
                <div>{profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
};

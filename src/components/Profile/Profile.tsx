import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import style from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "Redux/profileReducer";

type ProfilePropsType = {
    profile: ProfileType;
    updateStatus: (status: string) => void;
    saveProfile: (profile: ProfileType) => void
    status: string;
    isOwner: boolean;
    savePhoto: any
};

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.profile}>
            <div className={style.profileInfoAndPosts}>
                <ProfileInfo
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                    isOwner={props.isOwner}
                    savePhoto={props.savePhoto}
                    saveProfile={props.saveProfile}
                />
                <div className={style.myPosts}>
                    <MyPostsContainer/>
                </div>
            </div>
        </div>
    );
};

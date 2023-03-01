import React from "react";
import Village from "./../../../assets/village.jpg";
import style from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
  return (
    <div className={style.profileInfo}>
      <div>
        <img src={Village} />
      </div>
      <div className={style.description}>avatar + description</div>
    </div>
  );
};
export {};

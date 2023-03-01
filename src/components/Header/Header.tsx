import React from "react";
import Gangster_avatar from "../../assets/mysterious-gangster-character_23-2148473800.webp";
import style from "./header.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <img src={Gangster_avatar} />
    </div>
  );
};

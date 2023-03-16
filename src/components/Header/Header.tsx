import React from "react";
import Gangster_avatar from "../../assets/mysterious-gangster-character_23-2148473800.webp";
import style from "./header.module.css";
import { NavLink } from "react-router-dom";

export const Header = (props: any) => {
  return (
    <div className={style.header}>
      <img src={Gangster_avatar} />
      <div className={style.loginBlock}>
          {props.isAuth ? props.login
        : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </div>
  );
};

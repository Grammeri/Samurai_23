import React from "react";
import ReactIcon from "../../assets/react.jpg";
import style from "./header.module.css";
import {NavLink} from "react-router-dom";

export const Header = (props: any) => {
  return (
    <div className={style.header}>
      <img src={ReactIcon} />
      <div className={style.loginBlock}>
          {props.isAuth
              ?<div>{props.login} - <h1 onClick={props.logout}>Log out</h1></div>
        : <NavLink to={"/login"} className={style.loginLink}><h1>Login</h1></NavLink>}
      </div>
    </div>
  );
};

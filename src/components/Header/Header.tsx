import React from "react";
import ReactIcon from "../../assets/react.jpg";
import style from "./header.module.css";
import { NavLink } from "react-router-dom";

export const Header = (props: any) => {
  return (
    <div className={style.header}>
      <img src={ReactIcon} />
      <div className={style.loginBlock}>
          {props.isAuth ? props.login
        : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </div>
  );
};

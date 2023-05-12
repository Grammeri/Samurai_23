import React from "react";
import ReactIcon from "../../assets/react.jpg";
import style from "./header.module.css";
import { NavLink } from "react-router-dom";

export const Header = (props: any) => {
    return (
        <div className={style.header}>
            <img src={ReactIcon} alt="React Icon" />
            <div className={style.loginBlock}>
                {props.isAuth ? (
                    <div className={style.loggedIn}>
                        <span>{props.login}</span>
                        <button onClick={props.logout}>Log out</button>
                    </div>
                ) : (
                    <NavLink to={"/login"} className={style.loginLink}>
                        <h1>Login</h1>
                    </NavLink>
                )}
            </div>
        </div>
    );
};

import React from "react";
import ReactIcon from "../../assets/react.jpg";
import style from "./header.module.css";
import { NavLink } from "react-router-dom";

export const Header = (props: any) => {
    return (
        <div className={style.header}>
            <div className={style.iconReact}>
            <img src={ReactIcon} alt="React Icon" />
            <h1>REACT</h1>
            </div>
            <div className={style.loginBlock}>
                {props.isAuth ? (
                    <div className={style.loggedIn}>
                        <span>{props.login}</span>

                        <button onClick={props.logout}>Log out</button>
                    </div>
                ) : (
                    <NavLink to={"/login"} className={style.loginLink}>
                        <h1>LOGIN</h1>
                    </NavLink>
                )}
            </div>
        </div>
    );
};

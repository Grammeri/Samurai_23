import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

type NavBarPropsType = {};

export const NavBar = (props: NavBarPropsType) => {
  return (
    <div className={style.sideBar}>
      <div className={style.item}>
        <NavLink to={"/profile"} activeClassName={style.active}>
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to={"/dialogs"} activeClassName={style.active}>
          Messages
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to={"/users"} activeClassName={style.active}>
          Users
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to={"/news"} activeClassName={style.active}>
          Sport News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to={"/music"} activeClassName={style.active}>
          Music
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to={"/settings"} activeClassName={style.active}>
          Settings
        </NavLink>
      </div>
      {/*      <div>
        <Friend name={props.state.sideBar.friends.map(m=>m.name)}  />
      </div>*/}
    </div>
  );
};

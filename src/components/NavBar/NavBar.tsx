import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import { Friends } from "./Friends/Friends";
import { StoreType } from "../../Redux/state";

type NavBarPropsType = {
  store: StoreType;
};

/*type NavBarPropsType = {
    state:RootStateType
}*/

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
        <NavLink to={"/news"} activeClassName={style.active}>
          News
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
      <div>
        <Friends friends={props.store.state.stateBar.friends} />
      </div>
    </div>
  );
};

import React from "react";
import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    name: string;
    id: number;
};

export const DialogItem = (props: DialogsItemType) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={style.dialogsItems}>
            <NavLink to={path} activeClassName={style.active}>
                {props.name}
            </NavLink>
        </div>
    );
};



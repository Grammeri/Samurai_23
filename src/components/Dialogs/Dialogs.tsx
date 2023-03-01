import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

type DialogsItemType = {
  name: string;
  id: number;
};

const DialogItem = (props: DialogsItemType) => {
  let path = "/dialogs/" + props.id;

  return (
    <div>
      <NavLink to={path} activeClassName={style.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

type MessageType = {
  message: string;
};

const Message = (props: MessageType) => {
  return (
    <div>
      <div className={style.message}>{props.message}</div>
    </div>
  );
};

export const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem name={"Sasha"} id={1} />
        <DialogItem name={"Kolya"} id={2} />
        <DialogItem name={"Sveta"} id={3} />
        <DialogItem name={"Valera"} id={4} />
      </div>
      <div className={style.messages}>
        <Message message={"Good morning!"} />
        <Message message={"How are you?"} />
        <Message message={"I am fine"} />
        <Message message={"Good luck!"} />
      </div>
    </div>
  );
};

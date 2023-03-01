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
  let dialogsData = [
    { id: 1, name: "Sasha" },
    { id: 2, name: "Kolya" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Valera" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Dima" },
  ];

  let dialog = dialogsData.map(dialog=><DialogItem name={dialog.name} id={dialog.id} />)


  let messageData = [
    { id: 1, message: "Good morning!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" },
  ];

  let message = messageData.map(m=><Message message={m.message} />)

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialog}
      </div>
      <div className={style.messages}>
        {message}
      </div>
    </div>
  );
};

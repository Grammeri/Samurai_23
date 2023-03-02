import React from "react";
import style from "./../Dialogs.module.css";


type MessageType = {
  message: string;
};

export const Message = (props: MessageType) => {
  return (
    <div>
      <div className={style.message}>{props.message}</div>
    </div>
  );
};



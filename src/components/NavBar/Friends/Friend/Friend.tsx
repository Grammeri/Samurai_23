import React from "react";
import style from "./Friend.module.css"
import Cheburashka from "./../../../../assets/Cheburashka.jpg"

type FriendPropsType = {
  name:string
  id: number
}

export const Friend = (props:FriendPropsType) => {
  return (
    <div className={style.friend}>

        <img src={Cheburashka}  alt={"Cheburashka"}/>
      {props.name}
    </div>
  );
};

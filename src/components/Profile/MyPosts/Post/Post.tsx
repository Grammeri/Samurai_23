import React from "react";
import style from "./Post.module.css";
import Fox from "./../../../../assets/fox.jpg";

type PropsType = {
  message: string;
  likeCount: number;
};

export const Post = (props: PropsType) => {
  return (
    <div className={style.item}>
      <div>
        <img src={Fox} />
        {props.message}
        <div>
          <span>like</span>
          {" " + props.likeCount}
        </div>
      </div>
    </div>
  );
};

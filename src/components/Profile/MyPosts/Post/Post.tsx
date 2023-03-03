import React from "react";
import style from "./Post.module.css";
import Fox from "./../../../../assets/fox.jpg";

type PostPropsType = {
  message: string;
  likesCount: number;
};

export const Post = (props: PostPropsType) => {
  return (
    <div className={style.item}>
      <div>
        <img src={Fox} />
        {props.message}
        <div>
          <span>like</span>
          {" " + props.likesCount}
        </div>
      </div>
    </div>
  );
};

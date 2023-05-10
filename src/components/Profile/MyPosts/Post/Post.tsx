import React from "react";
import style from "./Post.module.css";
import Girl from "assets/girl.jpg";

type PostPropsType = {
  message: string;
  likesCount: number;
};

export const Post = (props: PostPropsType) => {
  return (
    <div className={style.item}>
      <div>
        <img src={Girl} />
        {props.message}
        <div>
          <span>like</span>
          {" " + props.likesCount}
        </div>
      </div>
    </div>
  );
};

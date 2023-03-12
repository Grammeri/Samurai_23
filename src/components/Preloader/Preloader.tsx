import React from "react";
import style from "./Preloader.module.css";
import preloader from "./../../assets/Surrounded segments.gif";

type PreloaderPropsType = {
  isFetching: boolean;
};

const Preloader = (props: PreloaderPropsType) => {
  return (
    <div className={style.preloader}>
      <img src={preloader} />
    </div>
  );
};

export default Preloader;

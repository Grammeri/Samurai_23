import React from "react";
import newsBackground from "assets/news.jpg";
import {Redirect} from "react-router-dom";

export const News = (props:any) => {
  if (!props.isAuth) return <Redirect to={"/login"}/>
  return  <img src={newsBackground} style={{width: "800px", margin: "20px"}} alt={"news background"}/>;
};

const mapStateToProps = (state: any) => ({
  isAuth: state.auth.isAuth
});

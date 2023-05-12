import React from "react";
import SettingsBackground from "assets/settings.jpg";
import {Redirect} from "react-router-dom";

export const Settings = (props:any) => {

  if (!props.isAuth) return <Redirect to={"/login"}/>

  return <img src={SettingsBackground} style={{width: "400px", margin:"20px"}} alt="settings background"/>
};

const mapStateToProps = (state: any) => ({
  isAuth: state.auth.isAuth
});
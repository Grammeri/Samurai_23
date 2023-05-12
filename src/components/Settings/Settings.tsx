import React from "react";
import SettingsBackground from "assets/settings.jpg";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const Settings = (props:any) => {

  if (!props.isAuth) return <Redirect to={"/login"}/>

  return <img src={SettingsBackground} style={{width: "400px", margin:"20px"}} alt="settings background"/>
};

const mapStateToProps = (state: any) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(Settings);
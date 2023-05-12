import React from "react";
import MusicBackground from "assets/music.jpg";
import {Redirect} from "react-router-dom";


export const Music = (props: any) => {

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return <img src={MusicBackground} style={{width: "800px", margin: "20px"}} alt="music background"/>;
};

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth
});

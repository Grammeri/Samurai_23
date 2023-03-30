import React from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../Redux/reduxStore";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: AppStateType): { isAuth: boolean } => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
};


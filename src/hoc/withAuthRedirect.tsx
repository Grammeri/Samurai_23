import React, { ComponentType } from "react";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../Redux/reduxStore";
import { connect } from "react-redux";

export type MapStateToPropsForRedirect = {
  isAuth: boolean;
};

let mapStateToPropsForRedirect = (
  state: AppStateType
): MapStateToPropsForRedirect => ({
  isAuth: state.auth.isAuth,
});

export function withAuthRedirect<T>(Component: ComponentType<T>) {
  //debugger;
  const RedirectComponent = (props: MapStateToPropsForRedirect) => {
    //debugger;
    let { isAuth, ...restProps } = props;
    if (!isAuth) return <Redirect to={"/login"} />;
    return <Component {...(restProps as T)} />;
  };

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedAuthRedirectComponent;
}

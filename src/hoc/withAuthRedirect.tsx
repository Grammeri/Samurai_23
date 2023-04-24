import React, { ComponentType } from "react";
import { Redirect } from "react-router-dom";
import { RootReducerType } from "../Redux/reduxStore";
import { connect } from "react-redux";

export type MapStateToPropsForRedirect = {
  isAuth: boolean;
};

let mapStateToPropsForRedirect = (
  state: RootReducerType
): MapStateToPropsForRedirect => ({
  isAuth: state.auth.isAuth,
});

export function withAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: MapStateToPropsForRedirect) => {
    let { isAuth, ...restProps } = props;
    if (!isAuth) return <Redirect to={"/login"} />;
    return <Component {...(restProps as T)} />;
  };

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedAuthRedirectComponent;
}

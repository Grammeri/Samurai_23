import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { RootReducerType } from "Redux/reduxStore";
import { logout } from "Redux/authReducer";

class HeaderContainer extends React.Component<any> {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: RootReducerType): any => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  profile: state.profilePage.profile,
});


export default connect(mapStateToProps, { logout })(HeaderContainer); //{logout} - thunkCreator

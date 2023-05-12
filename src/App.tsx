import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Route, withRouter } from "react-router-dom";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { compose } from "redux";
import { initializeApp } from "../src/Redux/appReducer";
import { connect } from "react-redux";

import Preloader from "components/Preloader/Preloader";
import { RootReducerType } from "Redux/reduxStore";
import Music from "components/Music/Music";
import News from "components/News/News";
import Settings from "components/Settings/Settings";
import {Footer} from "components/Footer/Footer";

class App extends React.Component<any> {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    let dialogComponent = () => <DialogsContainer />;
    let profileComponent = () => <ProfileContainer />;
    let usersComponent = () => <UsersContainer />;
    let loginComponent = () => <Login />;

    return (
      <div className="container">
        <HeaderContainer />
        <div className={"sideBar"}>
          <NavBar />
          {/*<NavBar state={state}/>*/}
        </div>
        <Footer/>

        <div className={"content"}>
          <Route path="/dialogs" render={dialogComponent} />
          <Route path="/profile/:userId?" render={profileComponent} />
          <Route path="/users" render={usersComponent} />

          <Route path="/login" render={loginComponent} />

          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootReducerType) => ({
  initialized: state.app.initialized,
});

export default compose<React.FC>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

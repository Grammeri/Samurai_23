import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/reduxStore";
import { getProfile, ProfileType } from "../../Redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";

type PathParamsType = {
  userId: any;
};

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;

type MapDispatchToPropsType = {
  //setUserProfile: (profile: ProfileType) => void;
  getProfile: any;
};

type MapStateToPropsType = {
  profile: ProfileType | null;
  //isAuth: boolean;
};

type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    //debugger;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (
  state: AppStateType
): { profile: ProfileType | null } => ({
  profile: state.profilePage.profile,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getProfile }),
  withRouter
)(ProfileContainer);

import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/reduxStore";
import {
  getProfile,
  getStatus,
  ProfileType,
  updateStatus,
} from "../../Redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";

type PathParamsType = {
  userId: any;
};

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;

type MapDispatchToPropsType = {
  //setUserProfile: (profile: ProfileType) => void;
  getProfile: any
  getStatus: any
  updateStatus:string
};

type MapStateToPropsType = {
  profile: ProfileType | null;
  status: string;
  //isAuth: boolean;
};

type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    //debugger;
    if (!userId) {
      userId = 19168;
    }
    this.props.getProfile(userId);
    //setTimeout(() => {}, 1000);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);

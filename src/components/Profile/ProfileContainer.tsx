import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { RootReducerType } from "Redux/reduxStore";
import {
  getProfile,
  getStatus,
  ProfileType,
  updateStatus,
} from "Redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";

type PathParamsType = {
  userId: any;
};

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;

type MapDispatchToPropsType = {
  //setUserProfile: (profile: ProfileType) => void;
  getProfile: any;
  getStatus: any;
  updateStatus: (status: string) => void;
};

type MapStateToPropsType = {
  profile: ProfileType | null;
  status: string;
  authorizedUserId: any;
  isAuth: any;
  //isAuth: boolean;
};

type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getProfile(userId);
    //setTimeout(() => {}, 1000);
    this.props.getStatus(userId);
  }

  render() {
    /*if (this.props.isAuth) return <Redirect to={"/login"}/>*/
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

let mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);

import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootReducerType} from "Redux/reduxStore";
import {getProfile, getStatus, ProfileType, savePhoto, updateStatus,} from "Redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
  userId: any;
};

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;

type MapDispatchToPropsType = {
  //setUserProfile: (profile: ProfileType) => void;
  getProfile: any;
  getStatus: any;
  updateStatus: (status: string) => void;
  savePhoto:any
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
  refreshProfile() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfile(userId);
    //setTimeout(() => {}, 1000);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(
    prevProps: Readonly<PropsType>,
    prevState: Readonly<{}>,
    snapshot?: any
  ) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    /*if (this.props.isAuth) return <Redirect to={"/login"}/>*/
    return (
      <div>
        <Profile
          {...this.props}
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          savePhoto = {this.props.savePhoto}
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
  connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto }),
  withRouter
)(ProfileContainer);

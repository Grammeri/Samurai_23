import React from "react";
import { Profile } from "./Profile";
import styles from "./Profile.module.css";
import axios from "axios";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/reduxStore";
import { ProfileType, setUserProfile } from "../../Redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";

type PathParamsType = {
  userId: any;
};

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;

type MapDispatchToPropsType = {
  setUserProfile: (profile: ProfileType) => void;
};

type MapStateToPropsType = {
  profile: ProfileType | null;
};

type ProfilePropsType = MapDispatchToPropsType & MapStateToPropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    //debugger;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
);

import React from "react";
import {Profile} from "./Profile";
import styles from "./Profile.module.css"
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {setUserProfile} from "../../Redux/profileReducer";

type MapDispatchToPropsType = {
  setUserProfile:(profile:any)=>void
}

type MapStateToProps = {
  profile:any
}

type ProfilePropsType = MapDispatchToPropsType & MapStateToProps


 class ProfileContainer extends React.Component<ProfilePropsType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);

import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootReducerType} from "Redux/reduxStore";
import {getProfile, getStatus, ProfileType, savePhoto, saveProfile, updateStatus,} from "Redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: any;
};

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;

type MapDispatchToPropsType = {
    getProfile: any;
    getStatus: any;
    updateStatus: (status: string) => void;
    savePhoto: any
    saveProfile: (profile: ProfileType) => void
};

type MapStateToPropsType = {
    profile: ProfileType;
    status: string;
    authorizedUserId: any;
    isAuth: any;
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
        return (
            <div>
                <Profile
                    {...this.props}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}
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
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter
)(ProfileContainer);

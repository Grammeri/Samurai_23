import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/reduxStore";
import {setAuthUserData} from "../../Redux/authReducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component<any> {
    componentDidMount() {
/*        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })*/
            usersAPI.getAuth().then((response) => {

                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            });
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state: AppStateType): any => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile:state.profilePage.profile
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);

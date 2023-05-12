import React, {FC} from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "components/FormsControls/FormsControls";
import {maxLengthCreator, required} from "utils/validators/validators";
import {connect} from "react-redux";
import {login} from "Redux/authReducer";
import styles from "../../components/FormsControls/FormsControls.module.css";
import Welcome from "assets/wellcome.jpg"
import {Redirect} from "react-router-dom";


export type FormDataType = {
    email: string;
    password: string;
    rememberMe: boolean;
    placeholder: string;
    name: string;
    validate: any;
    component: any;
};

const maxLength50 = maxLengthCreator(50);

const LoginForm: FC<InjectedFormProps<{}>> = ({handleSubmit, error}) => {
    return (
        <div className={styles.logginBlock}>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    {createField("Email",
                        "email",
                        [required, maxLength50],
                        Input, null)}
                </div>
                <div>
                    <label>Password</label>
                    <div className={styles.formSize}>
                        {createField("Password", "password", [required, maxLength50], Input, {
                            type: "password"
                        })}
                    </div>
                </div>
                <div>
                    <label style={{marginTop: "40px"}}>Remember me</label>
                    {createField(
                        null,
                        "remember Me",
                        null,
                        Input,
                        {
                            type: "checkbox",
                        },
                    )}

                </div>

                {error && <div className={styles.formSummaryError}>{error}</div>}
                <div>
                    <button>Login</button>
                    <div>
                        <h1 style={{color:"black"}}>Welcome</h1>
                        <img src={Welcome} style={{width: "400px", height: "200px"}} alt="welcome"/>
                        {/*                        <h3>Please login with:</h3>
                        <h3>free@samuraijs.com</h3>
                        <h3>Password: free</h3>*/}
                    </div>
                </div>
            </form>
        </div>
    );
};

const LoginReduxForm = reduxForm({
    form: "login",
})(LoginForm);

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    /*    if (props.isAuth) {
            return <Redirect to="/profile" />;
        }*/
    if (props.isAuth) return <Redirect to={"/profile"}/>


    return (
        <div>
            {/*<h1 style={{marginLeft:"70px"}}>Login</h1>*/}
            <LoginReduxForm onSubmit={onSubmit}/>

        </div>
    );
};

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth, // assuming that you have an "isAuth" property in your auth state
});
export default connect(mapStateToProps, {login})(Login);

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
                    <div className={styles.loginForm}>
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
                    </div>
                    <div>
                        {/*                        <h4>Please login with:</h4>
                        <h4>free@samuraijs.com</h4>
                        <h4>Password: free</h4>*/}
                        {/*<h1 style={{color: "black"}}>Welcome</h1>*/}
                        <img src={Welcome} style={{width: "400px", height: "200px", marginBottom: "25px"}}
                             alt="welcome"/>

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
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe); //login - callback !={login below}
    };

    /*    if (props.isAuth) {
            return <Redirect to="/profile" />;
        }*/
    if (props.isAuth) return <Redirect to={"/profile"}/>

    const initialValues = {
        email: "free@samuraijs.com",
        password: "free"
    }

    return (
        <div>
            {/*<h1 style={{marginLeft:"70px"}}>Login</h1>*/}
            <LoginReduxForm onSubmit={onSubmit} initialValues={initialValues}/>

        </div>
    );
};

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth, // assuming that you have an "isAuth" property in your auth state
});
export default connect(mapStateToProps, {login})(Login); //{login} - thunkCreator

import React, {FC} from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "components/FormsControls/FormsControls";
import {maxLengthCreator, required} from "utils/validators/validators";
import {connect} from "react-redux";
import {login} from "Redux/authReducer";
import styles from "../../components/FormsControls/FormsControls.module.css";


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
                {createField("Email", "email", [required, maxLength50], Input, null)}
                {createField("Password", "password", [required, maxLength50], Input, {
                    type: "password",
                })}
                {createField(
                    null,
                    "remember Me",
                    null,
                    Input,
                    {
                        type: "checkbox",
                    },
                    "Remember me"
                )}
                {error && <div className={styles.formSummaryError}>{error}</div>}
                <div>
                    <button style={{margin:"20px"}}>Login</button>
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
    return (
        <div>
            <h1 style={{marginLeft:"70px"}}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default connect(null, {login})(Login);

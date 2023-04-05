import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "components/FormsControls/FormsControls";
import {maxLengthCreator, required} from "utils/validators/validators";
import {connect} from "react-redux";
import {login} from "Redux/authReducer";
import styles from "../../components/FormsControls/FormsControls.module.css"

export type FormDataType = {
    email: string;
    password: string;
    rememberMe: boolean;
};

const maxLength50 = maxLengthCreator(50);

const LoginForm: FC<InjectedFormProps<{}>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Email"}
                    component={Input}
                    name={"email"}
                    validate={[required, maxLength50]}
                />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    component={Input}
                    name={"password"}
                    validate={[required]}
                    type={"password"}
                />
            </div>
            <div>
                <Field type={"checkbox"} component={Input} name={"rememberMe"}/>
                Remember me
            </div>
            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: "login",
})(LoginForm);


const Login = (props: any) => {
    console.log(props.login);
    const onSubmit = (formData: any) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe);
        //console.log(formData);
    };
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default connect(null, {login})(Login);

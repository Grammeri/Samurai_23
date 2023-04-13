import React, { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { createField, Input } from "components/FormsControls/FormsControls";
import { maxLengthCreator, required } from "utils/validators/validators";
import { connect } from "react-redux";
import { login } from "Redux/authReducer";
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

const LoginForm: FC<InjectedFormProps<{}>> = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required, maxLength50], Input, null)}
      {/*        <Field
          placeholder={"Email"}
          component={Input}
          name={"email"}
          validate={[required]}
        />*/}
      {createField("Password", "password", [required, maxLength50], Input, {
        type: "password",
      })}
      {/*      <Field
        placeholder={"Password"}
        component={Input}
        name={"password"}
        validate={[required]}
        type={"password"}
      />*/}
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
      {/*      <Field type={"checkbox"} component={Input} name={"rememberMe"} />
      Remember me*/}
      {error && <div className={styles.formSummaryError}>{error}</div>}
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
    console.log(formData);
    props.login(formData.email, formData.password, formData.rememberMe);
    //console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { login })(Login);

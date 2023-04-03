import React from "react";
import { Field, reduxForm } from "redux-form";
import {Input} from "../../components/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export type LoginPropsType = {
  handleSubmit: any;
};

const maxLength50 = maxLengthCreator(50)

export const LoginForm = (props: LoginPropsType) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} component={Input} name={"login"} validate={[required, maxLength50]} />
      </div>
      <div>
        <Field placeholder={"Password"} component={Input} name={"password"} validate={[required]} />
      </div>
      <div>
        <Field type={"checkbox"} component={Input} name={"remember me"} />
        Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export const Login = (props: any) => {
  const onSubmit = (formData: any) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

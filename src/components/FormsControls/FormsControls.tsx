import React, { FC, HTMLInputTypeAttribute } from "react";
import styles from "./FormsControls.module.css";
import { WrappedFieldInputProps, WrappedFieldMetaProps } from "redux-form";

type FormsControls = {
  input: WrappedFieldInputProps;
  meta: WrappedFieldMetaProps;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  autoFocus?: boolean;
};

const FormControl: FC<FormsControls> = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props: any) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props: any) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

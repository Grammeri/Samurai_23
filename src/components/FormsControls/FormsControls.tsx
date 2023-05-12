import React, {FC, HTMLInputTypeAttribute} from "react";
import styles from "./FormsControls.module.css";
import {
    Field,
    WrappedFieldInputProps,
    WrappedFieldMetaProps,
} from "redux-form";

type FormsControls = {
    input: WrappedFieldInputProps;
    meta: WrappedFieldMetaProps;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    autoFocus?: boolean;
    children?: React.ReactNode; // Add this line
    value?: string
};

const FormControl: FC<FormsControls> = ({
                                            input,
                                            meta: {touched, error},
    value,
                                            children,
                                            ...props
                                        }) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>{children}</div>
            {hasError && <span>{error}</span>}
        </div>
    );
};

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    );
};

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input style={{height: "25px"}}{...input} {...restProps} />
        </FormControl>
    );
};

export const createField = (
    placeholder: string | null,
    name: string,
    validators: any,
    component: any,
    props: any = {},
    text = ""
) => {
    return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                validate={validators}
                component={component}
                {...props}
            />{" "}
            {text}
        </div>
    );
};

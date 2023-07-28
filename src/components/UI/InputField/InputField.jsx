import React from "react";

import styles from './InputField.module.css';
import Input from '../Input/Input'


function InputField({header, type, value, onChange, error, errorMessage, ...props}) {

    return (
        <div className={styles.InputField} {...props}>
            <div className={styles.wrapperHeader}>
                <span className={styles.header}>
                    {header}
                </span>
            </div>
            <Input
                type={type}
                value={value}
                onChange={onChange}
                error={error}
                errorMessage={errorMessage}
            />
            <div className={styles.wrapperError}>
                <span className={styles.error}>
                    {errorMessage}
                </span>
            </div>
        </div>
    );
}

export default InputField;
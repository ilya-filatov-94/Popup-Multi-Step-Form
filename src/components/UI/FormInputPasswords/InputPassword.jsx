import React from "react";
import styles from './InputPassword.module.css';
import Input from "../Input/Input.jsx";
import CheckListPassword from './CheckListPassword.jsx';

function InputPassword(props) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.newPassword}>
                <span className={styles.header}>
                    {props.header}
                </span>
            </div>
            <Input
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                error={props.error}
                errorMessage={props.errorMessage}
            />
            <CheckListPassword
                isSmallLength={props.isSmallLength}
                hasNotNumbers={props.hasNotNumbers}
                hasNotLetters={props.hasNotLetters}
            />
            <div className={styles.wrapperError}>
                <span className={styles.error}>
                    {props.errorMessage}
                </span>
            </div>
        </div>
    );
}

export default InputPassword;
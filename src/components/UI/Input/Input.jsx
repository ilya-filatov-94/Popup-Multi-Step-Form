import React from "react";
import styles from './Input.module.css'


function Input(props) {

    return (
        <input
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            className={props.error && props.errorMessage !==''
                        ? `${styles.input} ${styles.error}`
                        : `${styles.input}`
            }
        />
    );
}

export default Input;
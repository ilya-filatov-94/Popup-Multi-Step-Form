import React from "react";
import styles from './TextArea.module.css'


function TextArea(props) {

    return (
        <textarea
            value={props.value}
            rows={props.rows}
            onChange={props.onChange}
            className={styles.textarea}
        />
    );
}

export default TextArea;
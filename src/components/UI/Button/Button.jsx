import React from "react";
import styles from './Button.module.css';


function Button({children, islogin, ...props}) {

    return (
        <button 
        {...props}
        className={islogin 
            ? `${styles.button} ${styles.isLoginUser}`
            : styles.button
        }
        type="submit">
            {children}
        </button>
    );
}

export default Button;
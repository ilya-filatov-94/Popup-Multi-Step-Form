import React from "react";
import styles from './ModalWindow.module.scss'


function ModalWindow({children, visible}) {

    const rootClasses = [styles.modalWindow];
    if (visible) {
        rootClasses.push(styles.active);
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={styles.contentWindow}>
                {children}
            </div>
        </div>
    );
}

export default ModalWindow;
import React from "react";
import styles from './ModalWindow.module.css'


function ModalWindow({children, visible, setVisible}) {

    const rootClasses = [styles.modalWindow];
    if (visible) {
        rootClasses.push(styles.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.contentWindow} onClick={event => (event.stopPropagation())}>
                {children}
            </div>
        </div>
    );
}

export default ModalWindow;
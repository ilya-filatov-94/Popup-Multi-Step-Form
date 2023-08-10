import React, { useEffect } from "react";
import styles from '../UserAgreement/UserAgreement.module.css';



function UserAgreement({IsModalOpen, stateCheckbox, setStateCheckbox}) {

    function changeState(newState) {
        setStateCheckbox(newState);
    }

    useEffect(() => {
        if (!IsModalOpen) {
            setStateCheckbox(false);
        }
    // eslint-disable-next-line
    }, [IsModalOpen]);

    return (
        <div className={styles.agreement}
            onClick={() => changeState(!stateCheckbox)}
        >
            <button
                className={stateCheckbox
                    ? styles.checkboxChecked
                    : styles.checkbox
                }
            >
            </button>
            <div>
                <span className={styles.text}> Я принимаю условия </span>
                <a className={`${styles.link} ${styles.text}`}
                    href="#agreement" target="_blank">
                    Пользовательского соглашения
                </a>
            </div>
        </div>
    );
}

export default UserAgreement;
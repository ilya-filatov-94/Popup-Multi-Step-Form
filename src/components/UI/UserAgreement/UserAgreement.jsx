import React, { useEffect } from "react";
import styles from '../UserAgreement/UserAgreement.module.css';



function UserAgreement({clearInput, stateCheckbox, setStateCheckbox}) {

    function changeState(newState) {
        setStateCheckbox(newState);
    }

    useEffect(() => {
        if (!clearInput) {
            setStateCheckbox(false);
        }
    // eslint-disable-next-line
    }, [clearInput]);

    return (
        <div className={styles.agreement}>
            <button
                className={stateCheckbox
                    ? styles.checkboxChecked
                    : styles.checkbox
                }
                onClick={()=>changeState(!stateCheckbox)}>
            </button>
            <div>
                <span className={styles.text}> Я принимаю условия </span>
                <a className={`${styles.link} ${styles.text}`} href="#agreement">Пользовательского соглашения</a>
            </div>
        </div>
    );
}

export default UserAgreement;
import React from "react";
import styles from '../FormInputPasswords/CheckListPassword.module.css';


function CheckListPassword({isSmallLength, hasNotNumbers, hasNotLetters}) {

    const iconStateOfPas = {
        default: styles.iconDefaultPas,
        ok: styles.iconOkPas,
        error: styles.iconErrorPas
    };

    const textStateOfPas = {
        default: `${styles.text} ${styles.textDefault}`,
        ok: `${styles.text} ${styles.textOk}`,
        error: `${styles.text} ${styles.textError}`
    };

    return (
        <div className={styles.wrapper}>
            <div>
                <span className={styles.headerRequirements}>
                    Пароль должен содержать:
                </span>
            </div>
            <div className={styles.item_require}>
                <div
                    alt="Length of Passw "
                    className={iconStateOfPas[isSmallLength]}
                />
                <span className={textStateOfPas[isSmallLength]}>от 6 до 32 символов</span>
            </div>

            <div className={styles.item_require}>
                <div
                    alt="Digits in Passw "
                    className={iconStateOfPas[hasNotNumbers]}
                />
                <span className={textStateOfPas[hasNotNumbers]}>Цифру</span>
            </div>

            <div className={styles.item_require}>
                <div
                    alt="Letters in Passw"
                    className={iconStateOfPas[hasNotLetters]}
                />
                <span className={textStateOfPas[hasNotLetters]}>Заглавную и строчную буквы</span>
            </div>
        </div>
    );
}

export default CheckListPassword;
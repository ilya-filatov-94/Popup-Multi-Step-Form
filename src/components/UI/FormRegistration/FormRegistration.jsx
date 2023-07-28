import React, { useState, useEffect } from "react";
import styles from './FormRegistration.module.css';
import InputEmail from '../InputEmail/InputEmail';
import InputNickname from '../InputNickname/InputNickname';
import FormInputPassword from '../FormInputPasswords/FormInputPassword';
import UserAgreement from '../UserAgreement/UserAgreement';
import Button from '../Button/Button';



function FormRegistration({visible, setVisible, login}) {

    const [stateEmail, setEmail] = useState({isValid: false, value: '', errorMessage: ''});
    const [stateNickname, setNickname] = useState({isValid: false, value: '', errorMessage: ''});
    const [statePassword, setPassword] = useState({isValid: false, checklist: false, value: '', errorMessage: ''});
    const [stateRepeatPas, setRepeatPas] = useState({isValid: false, value: '', errorMessage: ''});
    const [stateCheckbox, setStateCheckbox] = useState(false);
    const [stateSendButton, setLockedSendButton] = useState(false);

    useEffect(() => {
        const hasNotDuplicates = checkUniquePassw(stateNickname.value, stateEmail.value);
        const isValid = statePassword.checklist && hasNotDuplicates;
        if (isValid) {
            setPassword({
                ...statePassword,
                isValid: isValid
            });
        }
    // eslint-disable-next-line
    }, [statePassword.value, statePassword.checklist]);


    function checkUniquePassw(nick, email) {
        const duplicateNickname = statePassword.value === nick &&
            statePassword.value !== '' &&
            nick !== '';
        if (duplicateNickname) {
            setPassword({
                ...statePassword,
                isValid: false,
                errorMessage: 'Пароль не должен совпадать с Никнеймом'
            });
            return false;
        }
        const duplicateEmail = statePassword.value === email &&
            statePassword.value !== '' &&
            email !== '';
        if (duplicateEmail) {
            setPassword({
                ...statePassword,
                isValid: false,
                errorMessage: 'Пароль не должен совпадать с E-mail'
            });
            return false;
        }
        return true;
    }

    useEffect(() => {
        const validForm = stateEmail.isValid &&
            stateNickname.isValid &&
            statePassword.isValid &&
            stateRepeatPas.isValid &&
            stateCheckbox;
        if (validForm) {
            setLockedSendButton(true);
        } else {
            setLockedSendButton(false);
        }
    }, [stateEmail.isValid,
        stateNickname.isValid,
        statePassword.isValid,
        stateRepeatPas.isValid,
        stateCheckbox
    ]);

    function sendDataForm(event) {
        event.preventDefault();
        const userData = {
            Email: stateEmail.value,
            Nickname: stateNickname.value,
            Password: statePassword.value,
        };
        console.log(JSON.stringify(userData));
        login(true);
        setVisible(false);
    }

    return (
        <div className={styles.formRegistration}>
            <div className={styles.header}>
                <h1>Регистрация</h1>
                <div
                    onClick={() => setVisible(false)}
                    className={styles.btnClose}
                    alt="Close button"
                />
            </div>

            <InputEmail
                clearInput={visible}
                state={stateEmail}
                setState={setEmail}>
            </InputEmail>

            <InputNickname
                clearInput={visible}
                state={stateNickname}
                setState={setNickname}>
            </InputNickname>

            <FormInputPassword
                clearInput={visible}
                statePassword={statePassword}
                setPassword={setPassword}
                setRepeatPas={setRepeatPas}
            >
            </FormInputPassword>

            <UserAgreement
                clearInput={visible}
                stateCheckbox={stateCheckbox}
                setStateCheckbox={setStateCheckbox}
            >
            </UserAgreement>

            <div className={styles.loginBtn}>
                <Button
                    disabled = {!stateSendButton}
                    onClick={sendDataForm}
                >
                    Зарегистрироваться
                </Button>
            </div>
        </div>
    );
}

export default FormRegistration;

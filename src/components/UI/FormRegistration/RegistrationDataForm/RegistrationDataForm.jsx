import React, { useState, useEffect } from "react";
import styles from './RegistrationDataForm.module.scss';
import InputEmail from '../../InputEmail/InputEmail';
import InputNickname from '../../InputNickname/InputNickname';
import FormInputPassword from '../../FormInputPasswords/FormInputPassword';
import UserAgreement from '../../UserAgreement/UserAgreement';
import Button from '../../Button/Button';



function RegistrationDataForm({IsModalOpen, updateUserData, updateStepForm}) {

    const [stateEmail, setEmail] = useState({isValid: false, value: '', errorMessage: ''});
    const [stateNickname, setNickname] = useState({isValid: false, value: '', errorMessage: ''});
    const [statePassword, setPassword] = useState({isValid: false, checklist: false, value: '', errorMessage: ''});
    const [stateRepeatPas, setRepeatPas] = useState({isValid: false, value: '', errorMessage: ''});
    const [stateCheckbox, setStateCheckbox] = useState(false);
    const [stateSendButton, setUnlockedSendButton] = useState(false);


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
            setUnlockedSendButton(true);
        } else {
            setUnlockedSendButton(false);
        }
    }, [stateEmail.isValid,
        stateNickname.isValid,
        statePassword.isValid,
        stateRepeatPas.isValid,
        stateCheckbox
    ]);

    function setDataFirstStepRegistration(event) {
        event.preventDefault();
        const userData = {
            email: stateEmail.value,
            nickname: stateNickname.value,
            password: statePassword.value
        };
        updateUserData(userData);
        updateStepForm();
    }

    return (
        <div className={styles.wrapperForRegistrationFields}>
                <div className={styles.inputs}>
                    <InputEmail
                        IsModalOpen={IsModalOpen}
                        state={stateEmail}
                        setState={setEmail}>
                    </InputEmail>

                    <InputNickname
                        IsModalOpen={IsModalOpen}
                        state={stateNickname}
                        setState={setNickname}>
                    </InputNickname>

                    <FormInputPassword
                        IsModalOpen={IsModalOpen}
                        statePassword={statePassword}
                        setPassword={setPassword}
                        setRepeatPas={setRepeatPas}
                    >
                    </FormInputPassword>

                    <UserAgreement
                        IsModalOpen={IsModalOpen}
                        stateCheckbox={stateCheckbox}
                        setStateCheckbox={setStateCheckbox}
                    >
                    </UserAgreement>

                </div>

                <div className={styles.loginBtn}>
                    <Button
                        disabled={!stateSendButton}
                        onClick={setDataFirstStepRegistration}
                    >
                        Далее
                    </Button>
                </div>
            </div>
    );
}

export default RegistrationDataForm;
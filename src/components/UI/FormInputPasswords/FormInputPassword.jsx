import React, { useState, useEffect } from "react";
import InputPassword from "./InputPassword.jsx";
import InputField from '../InputField/InputField.jsx';
import { useValidationPassword } from "../../hooks/useValidationPassword.js";



function FormInputPassword({clearInput, statePassword, setPassword, setRepeatPas}) {

    //Состояния ввода пароля
    const [stateInputPas, setValuePas] = useState('');
    const password = useValidationPassword(stateInputPas, clearInput, {
        minLength: 6,
        maxLength: 32,
        hasDigit: true,
        lettersDfferentRegisters: true
    });

    //Валидация пароля
    useEffect(() => {
        const checklistPassw = password.stateChecklist1 === 'ok' &&
            password.stateChecklist2 === 'ok' &&
            password.stateChecklist3 === 'ok';
        let errorMessage = password.errorMessage;
        if (checklistPassw) {
            errorMessage = '';
        } 
        setPassword({
            ...statePassword,
            value: stateInputPas,
            errorMessage: errorMessage,
            checklist: checklistPassw
        });
        // eslint-disable-next-line
    }, [stateInputPas, 
        password.stateChecklist1, 
        password.stateChecklist2, 
        password.stateChecklist3,
        statePassword.value]);

    //Состояния повторного ввода пароля
    const [stateInputRepeatPas, setValueRepeatPas] = useState({value: '', error: false, errorMessage: ''});

    function checkRepeatPas(repeatPassword) {
        setValueRepeatPas({...stateInputRepeatPas, value: repeatPassword});
        if (repeatPassword === stateInputPas) {
            setValueRepeatPas({value: repeatPassword, error: false, errorMessage: ''});
            setRepeatPas({isValid: true, value: repeatPassword, errorMessage: ''});
        }
    }

    function hasErrorRepeatPas(repeatPassword) {
        if (repeatPassword !== stateInputPas) {
            setValueRepeatPas({...stateInputRepeatPas, error: true, errorMessage: 'Введённые пароли не совпадают'});
        }
    }

    //Очистка инпутов и состояний
    useEffect(() => {
        if (!clearInput) {
            setPassword({isValid: false, value: '', errorMessage: ''});
            setValueRepeatPas({value: '', error: false, errorMessage: ''});
            setRepeatPas({isValid: false, value: '', errorMessage: ''});
            stateInputPas === '' ? setValuePas(' ') : setValuePas('');
        } else {
            setValuePas('');
        }
        // eslint-disable-next-line
    }, [clearInput]);

    const errorPassword = password.stateChecklist1 === 'error' ||
        password.stateChecklist2 === 'error' ||
        password.stateChecklist3 === 'error';

    return (
        <div>
            <InputPassword
                header='Пароль'
                type='text'
                value={stateInputPas}
                error={statePassword.errorMessage || errorPassword}
                errorMessage={statePassword.errorMessage}
                isSmallLength={password.stateChecklist1}
                hasNotNumbers={password.stateChecklist2}
                hasNotLetters={password.stateChecklist3}
                onChange={(event) => setValuePas(event.target.value)}
            >
            </InputPassword>

            <InputField
                header='Пароль ещё раз'
                type='text'
                value={stateInputRepeatPas.value}
                error={stateInputRepeatPas.error}
                errorMessage={stateInputRepeatPas.errorMessage}
                style={{ marginTop: 7.5 }}
                onChange={(event) => checkRepeatPas(event.target.value)}
                onBlur={(event) => hasErrorRepeatPas(event.target.value)}
            >
            </InputField>
        </div>
    );
}

export default FormInputPassword;


/* eslint-disable default-case */
import { useEffect, useState } from "react"


export const useValidationPassword = (inputValue, IsModalOpen, validations) => {
    const [stateChecklist1, setStateChecklist1] = useState('default');
    const [stateChecklist2, setStateChecklist2] = useState('default');
    const [stateChecklist3, setStateChecklist3] = useState('default');
    const [errorMessage, setErrorMessage] = useState('');
    const [stateWindow, openWindow] = useState(false);


    useEffect(() => {
        let smallLength = false;
        let bigLength = false;
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    if (inputValue.length >= validations[validation]) {
                        smallLength = true;
                    }
                    break;

                case 'maxLength':
                    if (inputValue.length < validations[validation] && smallLength) {
                        bigLength = true;
                        setStateChecklist1('ok');
                    }
                    if ((!smallLength || !bigLength) && stateChecklist1 === 'ok') {
                        setStateChecklist1('error');
                        setErrorMessage('Пароль не соответствует требованиям длины');
                    }
                    break;

                case 'hasDigit':
                    const hasDigit = /[0-9]/g.test(inputValue);
                    if (!hasDigit && stateChecklist2 === 'ok') {
                        setStateChecklist2('error');
                        setErrorMessage('В пароле отсутствую цифры');
                    }
                    if (hasDigit) {
                        setStateChecklist2('ok');
                    }
                    break;

                case 'lettersDfferentRegisters':
                    const hasLettersBigRegister = /[A-ZА-ЯЁ]/g.test(inputValue);
                    const hasLettersSmallRegister = /[a-zа-яё]/g.test(inputValue);
                    if ((!hasLettersBigRegister || !hasLettersSmallRegister) && stateChecklist3 === 'ok') {
                        setStateChecklist3('error');
                        setErrorMessage('В пароле нет букв разного регистра');
                    }
                    if (hasLettersBigRegister && hasLettersSmallRegister) {
                        setStateChecklist3('ok');
                    }
                    break;
            }
        }

        //Очистка состояний после закрытия модального окна
        if (IsModalOpen) {
            openWindow(true);
        }
        if (stateWindow && !IsModalOpen) {
            setStateChecklist1('default');
            setStateChecklist2('default');
            setStateChecklist3('default');
            setErrorMessage('');
        }
    // eslint-disable-next-line
    }, [inputValue]);
    return {
        stateChecklist1, 
        stateChecklist2, 
        stateChecklist3,
        errorMessage
    };
}


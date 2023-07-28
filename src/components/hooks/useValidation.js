/* eslint-disable default-case */
import { useEffect, useState } from "react"

export const useValidation = (value, validations) => {

    const [isValid, setValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setValid(true);
        setErrorMessage('');
        for (const validation in validations) {
            switch (validation) {
                case 'firstCharacterIsLetter':
                    if (value !=='' && !/^[A-Za-z]/.test(value)) {
                        setValid(false);
                        setErrorMessage(`может начинаться только с латинской буквы`);
                    }
                    break;

                case 'onlyLatinDigitsUnderscore':
                    if (value !=='' &&  !/^[A-Za-z0-9_]*$/.test(value)) {
                        setValid(false);
                        setErrorMessage(`допускает только латинские символы, символ _  и цифры`);
                    }
                    break;

                case 'minLength':
                    if (value.length < validations[validation]) {
                        setValid(false);
                        setErrorMessage(`не может быть короче ${validations[validation]} символов`);
                    }
                    break;

                case 'maxLength':
                    if (value.length > validations[validation]) {
                        setValid(false);
                        setErrorMessage(`не может быть длинее ${validations[validation]} символов`);
                    }
                    break;

                case 'checkEmail': 
                    let isEmail = /^([a-z][a-z0-9]{1,13}[_.\\-]?[a-z0-9]{1,13})@(((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|([a-z0-9]{1,10}[\\-]?[a-z0-9]{1,10}[.]?[a-z0-9-]{1,10}[.]{1}[a-z]{2,4}))$/;
                    if (!isEmail.test(value)) {
                        setValid(false);
                        setErrorMessage(`не является корректным адресом почты`);
                    }
                    break;
            }
        }
    // eslint-disable-next-line
    }, [value]);
    return {isValid, errorMessage}
}

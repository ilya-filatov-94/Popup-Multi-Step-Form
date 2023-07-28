import React, { useState, useEffect } from "react";
import { useValidation } from '../../hooks/useValidation'
import InputField from "../InputField/InputField";


function InputNickname({clearInput, state, setState}) {

    const [value, setValue] = useState('');
    const { isValid, errorMessage } = useValidation(value,
        {
            minLength: 3,
            maxLength: 40,
            onlyLatinDigitsUnderscore: true,
            firstCharacterIsLetter: true
        });

    useEffect(() => {
        setState({...state, value});
        if (isValid) {
            setState({isValid: isValid, value: value, errorMessage: ''});
        }
    // eslint-disable-next-line
    }, [isValid, value]);

    function checkError(value) {
        setValue(value);
        if (!isValid) {
            setState({...state, isValid: isValid, errorMessage: `Никнейм ${errorMessage}`});
        }
    }

    useEffect(() => {
        if (!clearInput) {
            setValue('');
            setState({isValid: false, value: '', errorMessage: ''});
        }
    // eslint-disable-next-line
    }, [clearInput]);

    return (
        <InputField
            header='Никнейм'
            type='text'
            value={value}
            error={!isValid}
            errorMessage={state.errorMessage}
            style={{marginTop: 10}}
            onChange={(event) => setValue(event.target.value)}
            onBlur={(event) => checkError(event.target.value)}
        >
        </InputField>
    );
}

export default InputNickname;
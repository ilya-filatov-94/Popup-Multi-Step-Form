import React, { useEffect, useState } from "react";
import InputField from '../InputField/InputField'
import { useValidation } from "../../hooks/useValidation";


function InputEmail({modalIsOpened, state, setState}) {

    const [value, setValue] = useState('');
    const { isValid, errorMessage } = useValidation(value, {checkEmail: true});

    useEffect(() => {
        setState({...state, value: value});
        if (isValid) {
            setState({value: value, isValid: isValid, errorMessage: ''});
        }
    // eslint-disable-next-line
    }, [isValid, value]);

    function checkError(value) {
        setValue(value);
        if (!isValid) {
            setState({...state, isValid: isValid, errorMessage: `E-mail ${errorMessage}`});
        }
    }

    useEffect(() => {
        if (!modalIsOpened) {
            setValue('');
            setState({isValid: false, value: '', errorMessage: ''});
        }
    // eslint-disable-next-line
    }, [modalIsOpened]);
    
    return (
        <InputField
            header='E-mail'
            type='email'
            value={value}
            error={!isValid}
            errorMessage={state.errorMessage}
            onChange={(event) => setValue(event.target.value)}
            onBlur={(event) => checkError(event.target.value)}
        >
        </InputField>
    );
}

export default InputEmail;
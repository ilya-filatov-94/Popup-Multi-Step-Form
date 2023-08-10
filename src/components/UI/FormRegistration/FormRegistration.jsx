import React, { useState } from "react";
import styles from './FormRegistration.module.scss';
import MultiStepForm from '../MultiStepForm/MultiStepForm';
import RegistrationDataForm from './RegistrationDataForm/RegistrationDataForm';
import PersonalInformationForm from './PersonalInformationForm/PersonalInformationForm';


function FormRegistration({IsModalOpen, setVisibleWindow, login}) {

    const [userData, setUserData] = useState({
        email: '',
        nickname: '',
        password: '',
        gender: '',
        education: '',
        about: '',
        subscriptionPolitics: false,
        subscriptionEconomics: false,
        subscriptionIncidents: false
    });

    function updateUserData(newData) {
        setUserData({...userData, ...newData});
    }

    function sendDataForm() {
        console.log(JSON.stringify(userData));
        login(true);
        setVisibleWindow(false);
    }

    const arrayOfForms = [
        {
            name: 'registrationData', 
            currentForm: <RegistrationDataForm
                IsModalOpen={IsModalOpen}
                updateUserData={updateUserData}
            />
        },
        {
            name: 'personalInformation', 
            currentForm: <PersonalInformationForm
                IsModalOpen={IsModalOpen}
                updateUserData={updateUserData}
                sendDataForm={sendDataForm}
            />
        }
    ];

    return (
        <div className={styles.formRegistration}>
            <div className={styles.header}>
                <h1>Регистрация</h1>
                <div
                    onClick={() => setVisibleWindow(false)}
                    className={styles.btnClose}
                    alt="Close button"
                />
            </div>

            <MultiStepForm
                arrayOfForms={arrayOfForms}
                resetStepForm={!IsModalOpen}
            />

        </div>
    );
}

export default FormRegistration;




import React, {useEffect, useState} from "react";
import styles from './PersonalInformationForm.module.scss';
import RadioButton from "../../RadioButton/RadioButton";
import optionsRadioGender from '../../../../assets/radioBtn-data/optionsRadioGender.json';
import Select from '../../Select/Select';
import optionsEducation from "../../../../assets/select-data/optionsSelectEducation.json";
import TextArea from "../../TextArea/TextArea";
import Button from '../../Button/Button';



function PersonalInformationForm({IsModalOpen, updateUserData, sendDataForm}) {

    const [stateGender, setGender] = useState('');
    const [chosenEducation, chooseEducation] = useState('');
    const [aboutText, setAboutText] = useState('');
    const [subscriptionPolitics, subscribeToPolitics] = useState(false);
    const [subscriptionEconomics, subscribeToEconomics] = useState(false);
    const [subscriptionIncidents, subscribeToIncidents] = useState(false);

    //Очистка текстового поля и чекбоксов при закрытии окна
    useEffect(() => {
        if (!IsModalOpen) {
            setAboutText('');
            subscribeToPolitics(false);
            subscribeToEconomics(false);
            subscribeToIncidents(false);
        }
    }, [IsModalOpen]);

    //Обновление данных
    useEffect(() => {
        const personalData = {
            gender: stateGender,
            education: chosenEducation === '' ? 'Не выбрано' : chosenEducation,
            about: aboutText,
            subscriptionPolitics: subscriptionPolitics,
            subscriptionEconomics: subscriptionEconomics,
            subscriptionIncidents: subscriptionIncidents
        }
        updateUserData(personalData);
    // eslint-disable-next-line
    }, [chosenEducation, 
        stateGender,
        aboutText,
        subscriptionPolitics,
        subscriptionEconomics,
        subscriptionIncidents
    ]);

    function setDataSecondStepRegistration(event) {
        event.preventDefault();
        sendDataForm();
    }

    return (
        <div className={styles.wrapperForRegistrationFields}>
            <div className={styles.inputs}>

                <div className={styles.wrapperGender}>
                    <div className={styles.wrapperHeader}>
                        <span className={styles.headerField}>
                            Укажите Ваш пол
                        </span>
                    </div>
                    <RadioButton
                        options={optionsRadioGender}
                        onChange={setGender}
                        resetRadioBtn={!IsModalOpen}
                    >
                    </RadioButton>
                </div>

                <div className={styles.wrapperEducation}>
                    <div className={styles.wrapperHeader}>
                        <span className={styles.headerField}>
                            Выберите Ваш уровень образования
                        </span>
                    </div>
                    <Select
                        placeholder='Не выбрано'
                        options={optionsEducation}
                        onChange={chooseEducation}
                        resetSelect={!IsModalOpen}
                    >
                    </ Select>
                </div>

                <div className={styles.wrapperAbout}>
                    <div className={styles.wrapperHeader}>
                        <span className={styles.headerField}>
                            Расскажите о себе
                        </span>
                    </div>
                    <TextArea
                        value={aboutText}
                        rows={4}
                        onChange={event => setAboutText(event.target.value)}
                    >
                    </TextArea>
                </div>

                <div className={styles.wrapperMagazineSections}>
                    <div className={styles.wrapperHeader}>
                        <span className={styles.headerField}>
                            Выберите рубрики на которые хотите подписаться
                        </span>
                    </div>

                    <div className={styles.subscription}
                        onClick={() => subscribeToPolitics(!subscriptionPolitics)}
                    >
                        <button
                            className={subscriptionPolitics
                                ? styles.checkboxChecked
                                : styles.checkbox
                            }
                        >
                        </button>
                        <div> 
                            <span className={styles.text}> Подписаться на новости политики </span>
                        </div>
                    </div>

                    <div className={styles.subscription}
                        onClick={() => subscribeToEconomics(!subscriptionEconomics)}
                    >
                        <button
                            className={subscriptionEconomics
                                ? styles.checkboxChecked
                                : styles.checkbox
                            }
                        >
                        </button>
                        <div>
                            <span className={styles.text}> Подписаться на новости экономики </span>
                        </div>
                    </div>

                    <div className={styles.subscription}
                        onClick={() => subscribeToIncidents(!subscriptionIncidents)}
                    >
                        <button
                            className={subscriptionIncidents
                                ? styles.checkboxChecked
                                : styles.checkbox
                            }
                        >
                        </button>
                        <div>
                            <span className={styles.text}> Подписаться на новости происшествий </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.loginBtn}>
                <Button
                    onClick={setDataSecondStepRegistration}
                >
                    Зарегистрироваться
                </Button>
            </div>
        </div>
    );
}

export default PersonalInformationForm;
import React, { useEffect, useRef, useState } from "react";
import styles from './Select.module.scss'



export default React.memo(
    function Select({ placeholder, options, onChange, resetSelect }) {

        const [stateSelect, setOption] = useState({ visible: false, selectOption: placeholder });
        const valueRef = useRef(null);

        //Сброс выбора
        useEffect(() => {
            if (resetSelect) {
                valueRef.current.value = placeholder;
                onChange('');
                setOption({
                    visible: false,
                    selectOption: placeholder
                });
            }
            // eslint-disable-next-line
        }, [resetSelect]);

        if (!options.length) {
            return null;
        }

        function changeVisibleList() {
            let state = stateSelect.visible;
            let option = valueRef.current.value;
            setOption({
                visible: !state,
                selectOption: option ? option : placeholder
            });
        }

        function handleOptionClick(index) {
            valueRef.current.value = options[index].name;
            onChange(options[index].name);
        }

        return (
            <div className={styles.wrapper} onClick={changeVisibleList}>
                <div className={stateSelect.visible
                    ? `${styles.backDrop} ${styles.backDrop__active}`
                    : `${styles.backDrop}`}>
                </div>

                <div className={stateSelect.visible
                    ? `${styles.select} ${styles.__input} ${styles.input__open}`
                    : `${styles.select} ${styles.__input}`
                }>
                    <span ref={valueRef}>
                        {stateSelect.selectOption}
                    </span>
                    <button
                        type="button"
                        className={stateSelect.visible
                            ? styles.arrow_up
                            : styles.arrow_down
                        }
                    >
                    </button>
                </div>
                <div className={stateSelect.visible
                    ? `${styles.select} ${styles.__dropdown} ${styles.dropdown__open}`
                    : `${styles.select} ${styles.__dropdown}`
                }>
                    <ul className={styles.select__list}>
                        {options.map((item, index) =>
                            <li
                                key={item.value}
                                className={item.name === stateSelect.selectOption
                                    ? `${styles.item} ${styles.selected__item}`
                                    : `${styles.item}`
                                }
                                onClick={() => handleOptionClick(index)}>
                                {item.name}
                            </li>)}
                    </ul>
                </div>
            </div>
        );
    }
);

import React, { useEffect, useState } from "react";
import styles from './RadioButton.module.css';



function RadioButton({options, onChange, resetRadioBtn}) {

    const [isCheckedIndex, setCheckedIndex] = useState(0);

    useEffect(() => {
        if (!options.length) {
            return null;
        }
        if (resetRadioBtn) {
            onChange(options[0].value);
            setCheckedIndex(0);
        }
    // eslint-disable-next-line
    }, [resetRadioBtn])

    if (!options.length) {
        return null;
    }

    function handleOptionClick(index) {
        onChange(options[index].value);
        setCheckedIndex(index);
    }

    return (
        <div className={styles.wrapper}>
            <ul className={styles.radioBtnList}>
                {options.map((item, index) =>
                    <li 
                        key={item.value}
                        className={styles.elemList}
                        onClick={() => handleOptionClick(index)}
                    >
                        <div className={styles.wrapperText}>
                            <span className={styles.text}>
                                {item.value}
                            </span>
                        </div>
                        <div className={styles.wrapperButton}>
                            <button
                                className={index === isCheckedIndex
                                    ? styles.radioBtnChecked
                                    : styles.radioBtn
                                }
                            >
                            </button>
                        </div>
                    </li>)}
            </ul>
        </div>
    );
}

export default RadioButton;
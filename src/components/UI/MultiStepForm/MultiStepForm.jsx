import React, { useEffect, useState } from "react";
import TemplateStepForm from './TemplateStepForm'



function MultiStepForm({arrayOfForms, resetStepForm, ...props}) {

    const [currentStep, changeStep] = useState(0);
    useEffect(() => {
        if (resetStepForm) {
            changeStep(0);  //Сброс показа второго шага формы при закрытии окна
        }
    }, [resetStepForm]);

    function updateStepForm() {
        if (currentStep + 1 <= (stepsForm.length - 1)) {
            changeStep(currentStep + 1);
        }
    }

    const stepsForm = [];
    for (let i = 0; i < arrayOfForms.length; i++) {
        stepsForm.push(
            <TemplateStepForm updateStepForm={updateStepForm} {...props}>
                {arrayOfForms[i].currentForm}
            </TemplateStepForm>
        );
    }

    if (!stepsForm.length) {
        return null;
    }

    return stepsForm[currentStep];
}

export default MultiStepForm;
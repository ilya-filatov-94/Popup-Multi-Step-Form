import React from "react";


function TemplateStepForm({children, updateStepForm, ...props}) {
    return (
        <div {...props} >
            {React.cloneElement(children, {updateStepForm})}
        </div>
    );
}

export default TemplateStepForm;
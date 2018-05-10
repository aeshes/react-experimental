import React from 'react';

const FormErrors = ({formErrors}) => {
    return(
        <div className="form-errors">
            {
                Object.keys(formErrors).map( (fieldName, i) => {
                    if (formErrors[fieldName].length > 0) {
                        return (
                            <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                        )
                    }
                    return '';
                })
            }
        </div>
    )
}

export default FormErrors;
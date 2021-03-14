import React from 'react';

function Input({type, name, placeholder, required,onChange }) {

    const isTypeTextare = type === 'textarea';
    const isTypeText = type === 'text';
    return (
        <>
        { isTypeTextare ? (
            <textarea 
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            className="w-full rounded-md bg-grayBackground mb-8 resize-none h-36"
            onChange={onChange}
            />

        ) : (

            <input 
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            className={ `rounded-md bg-grayBackground 
            ${isTypeText ? ("w-full") : ( " w-2/3 p-4" ) } mb-8`}
            />
            
        ) }
        </>

    )
}

export default Input;
import React from 'react';

function Input({type, name, placeholder, required }) {

    const isTypeTextare = type === 'textarea';
    return (
        <>
        { isTypeTextare ? (
            <textarea 
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            className="w-full rounded-md bg-grayBackground mb-8 resize-none h-36 "
            />

        ) : (

            <input 
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            className="w-full rounded-md bg-grayBackground mb-8"
            />
            
        ) }
        </>

    )
}

export default Input;
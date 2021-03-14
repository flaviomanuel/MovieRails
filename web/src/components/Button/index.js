import React from 'react';
import { Link } from 'react-router-dom'
function Button({ text, link, isSubmitButton }) {
    return (
        <>
        { isSubmitButton ? ( 
            <button to={link} type="submit"className="w-full text-white h-12 bg-redRails rounded-lg text-lg font-bold flex items-center justify-center">
            <p className="my-1 mx-6 text-white">{text}</p>
            </button> 
             
        ) : ( 
       
        <Link to={link} className="h-12 text-white border-redRails text-white border-solid rounded-lg border-4 text-lg font-bold flex items-center">
        <p className="my-1 mx-6 text-redRails">{text}</p>
         </Link> 
       
    ) }
        
        </>
    )
}

export default Button;
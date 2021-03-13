import React from 'react';
import { Link } from 'react-router-dom'
function Button({ text }) {
    return (
        <Link to="/" className="h-12 border-redRails border-solid rounded-lg border-4 text-lg font-bold flex items-center">
            <p className="my-1 mx-6 text-redRails">{text}</p>
        </Link>
    )
}

export default Button;
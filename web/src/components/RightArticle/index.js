import React from 'react';
import Forms from '../Forms';

function RightArticle({ title, buttonText, isCreateMovie}){
    return (
        <div className="container m-8 bg-white rounded-2xl">
            <h1 className="font-bold text-titleForm mx-auto text-center m-4">{title}</h1>
            <Forms isCreateMovie={isCreateMovie} buttonText={buttonText}/> 
        </div>
    )
}

export default RightArticle
import React from 'react';
import Forms from '../../components/Forms';
import LeftArticle from '../../components/LeftArticle';

function CreatePage(){
    return(
        <main className="flex">
            <LeftArticle />
            <div className="container m-16 bg-white rounded-2xl">
                 <h1 className="font-bold text-titleForm mx-auto text-center m-4">Cadastrar informações sobre o filme</h1>
                <Forms/> 
            </div>
        </main>
    )
}

export default CreatePage;
import React from 'react';

import LeftArticle from '../../components/LeftArticle';
import RightArticle from '../../components/RightArticle';

function CreatePage(){
    return(
        <main className="flex">
        <LeftArticle title="Cadastre um filme"/>
        <RightArticle 
        title="Cadastre informações sobre o filme"
        buttonText="Cadastrar Filme"
        isCreateMovie={true}/>
         </main>
    )
}

export default CreatePage;
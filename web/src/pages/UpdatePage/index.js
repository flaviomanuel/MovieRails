import React from 'react';

import LeftArticle from '../../components/LeftArticle';
import RightArticle from '../../components/RightArticle';

function UpdatePage() {
    return(
        <main className="flex">
        <LeftArticle title="Atualizar um filme"/>
        <RightArticle 
        title="Atualizar informações sobre o filme"
        buttonText="Atualizar Filme"
        />
         </main>
    )
}

export default UpdatePage;
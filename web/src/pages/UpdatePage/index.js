import React from 'react';
import { useParams } from 'react-router';

import LeftArticle from '../../components/LeftArticle';
import RightArticle from '../../components/RightArticle';

function UpdatePage() {

    const {id} = useParams();



    return(
        <main className="flex">
        <LeftArticle title="Atualizar um filme"/>
        <RightArticle 
        title="Atualizar informações sobre o filme"
        buttonText="Atualizar Filme"
        isCreateMovie={false}
        id={id}
        />
         </main>
    )
}

export default UpdatePage;
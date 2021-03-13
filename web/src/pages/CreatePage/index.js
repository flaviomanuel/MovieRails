import React from 'react';

import LeftArticle from '../../components/LeftArticle';
import RightArticle from '../../components/RightArticle';

function CreatePage(){
    return(
        <main className="flex">
        <LeftArticle/>
        <RightArticle/>
         </main>
    )
}

export default CreatePage;
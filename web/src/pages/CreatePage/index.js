import React from 'react';
import Forms from '../../components/Forms';
import LeftMain from '../../components/LeftMain';

function CreatePage(){
    return(
        <main className="flex">
            <LeftMain />
            <Forms/>
        </main>
    )
}

export default CreatePage;
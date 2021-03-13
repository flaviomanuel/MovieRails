import React from 'react';
import Input from './components/Input';

function Forms(){
    return(
        <form className="my-10 mx-16">
            <Input
            type="text"
            name="name"
            placeholder="Nome do filme"
            required="true"
            />
            <Input
            type="text"
            name="director"
            placeholder="Nome do diretor"
            required="true"
            />

            <Input
            type="textarea"
            name="synopsis"
            placeholder="Sinopse do filme"
            required="true"
            />
            
  
        </form>
    )
}

export default Forms;
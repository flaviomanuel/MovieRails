import React from 'react';
import Input from './components/Input';
import Button from '../../components/Button';
import ReactStars from 'react-rating-stars-component'

function Forms(){

    const ratingChanged = (newRating) => {
        console.log(newRating);
      }; 
    return(
        <form className="my-auto mx-16">
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
            
            <div className="flex items-center justify-between">
                <Input
                type="date"
                name="release_date"
                placeholder="29/29/1992"
                required="true"
                />
                <ReactStars
                count={5}
                onChange={ratingChanged}
                size={50}
                value={5}
                activeColor="#ffd700"
                classNames="mb-8 "
            />,
            </div>

        <Button
        text="Cadastrar Filme"
        link="/"
        isSubmitButton={true}
        />
        </form>
    )
}

export default Forms;
import React, { useState,useEffect }from 'react';
import {useHistory} from 'react-router-dom'

import Input from './components/Input';
import Button from '../../components/Button';
import ReactStars from 'react-rating-stars-component'

import api from '../../services/api'

function Forms({buttonText, isCreateMovie, id}){

    const history = useHistory()

    const[name, setName] = useState('');
    const[release_date, setReleaseDate] = useState('');
    const[director, setDirector] = useState('');
    const[synopsis, setSynopsis] = useState('');
    const[score, setScore] = useState(0);

 
    async function handleSubmit(event) {
        event.preventDefault()

        const data = { 
            name,
            release_date,
            director,
            synopsis,
            score
        } 
        isCreateMovie ? handleCreate(data) : handleUpdate(data) 
        

        async function handleCreate(data) {
            try {
                await api.post('movie',data)
                alert('Filme cadastrado com sucesso!')
                history.push('/')
    
            } catch(error) {
                if(error.request.status === 400) {
                    alert("Algo está errado no formulário , revise as infromações novamente...")
                }
            }  
        }

        async function handleUpdate(data) {
            try {
                await api.put(`movie/${id}`,data)
                alert('Filme atualizado com sucesso!')
                history.push('/')
            } catch(error) {
                if(error.request.status === 400) {
                    alert("Algo está errado no formulário , revise as infromações novamente...")
                }
            }  
        }


    }
    return(
        <form onSubmit={handleSubmit} className="my-auto mx-16">
            <Input
            type="text"
            name="name"
            placeholder="Nome do filme"
            required="true"
            onChange={event => setName(event.target.value)}
            />
            <Input
            type="text"
            name="director"
            placeholder="Nome do diretor"
            required="true"
            onChange={event => setDirector(event.target.value)}
            />

            <Input
            type="textarea"
            name="synopsis"
            placeholder="Sinopse do filme"
            required="true"
            onChange={event => setSynopsis(event.target.value)}
            />
            
            <div className="flex items-center justify-between">
                <Input
                type="date"
                name="release_date"
                placeholder="29/29/1992"
                required="true"
                onChange={event => setReleaseDate(event.target.value)}

                />
                <ReactStars
                count={5}
                size={50}
                value={5}
                activeColor="#ffd700"
                classNames="mb-8 "
                onChange={event => setScore(event)}
            />,
            </div>

        <Button
        text={buttonText}
        link="#"
        isSubmitButton={true}
        />
        </form>
    )
}

export default Forms;
import React, { useState, useEffect }from 'react';
import {useHistory} from 'react-router-dom'

import Input from './components/Input';
import Button from '../../components/Button';
import ReactStars from 'react-rating-stars-component'

import api from '../../services/api'

const initialValue = {
    name: '',
    release_date: '',
    director: '',
    synopsis: '',
    score:   0,
}

function Forms({buttonText, isCreateMovie, id}){

    const history = useHistory()


    const[values, setValues] = useState(initialValue)

    async function handleSubmit(event) {
        event.preventDefault()

     
        isCreateMovie ? handleCreate(values) : handleUpdate(values) 
        

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

    useEffect(() => {
        api.get(`movie/${id}`).then((response) => {
            setValues(response.data.data)
        })
    }, [])

    function onChange(event) {

        console.log(values)

        setValues({...values, [event.target.name]: event.target.value})
    }
    return( 
        <form onSubmit={handleSubmit} className="my-auto mx-16">
            <Input
            type="text"
            name="name"
            value={values.name}
            placeholder="Nome do filme"
            required="true"
            onChange={onChange}
            />
            <Input
            type="text"
            name="director"
            value={values.director}
            placeholder="Nome do diretor"
            required="true"
            onChange={onChange}
            />

            <Input
            type="textarea"
            name="synopsis"
            value={values.synopsis}
            placeholder="Sinopse do filme"
            required="true"
            onChange={onChange}
            />
            
            <div className="flex items-center justify-between">
                <Input
                type="date"
                name="release_date"
                placeholder="29/29/1992"
                required="true"
                onChange={onChange}
                value={values.release_date}
                />
                <ReactStars
                count={5}
                name="score"
                size={50}
                value={values.score}
                activeColor="#ffd700"
                classNames="mb-8 "
                
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
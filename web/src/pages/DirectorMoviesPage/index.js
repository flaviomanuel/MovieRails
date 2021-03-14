import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';

import Card from '../../components/Card';

import api from '../../services/api';
import { useParams } from 'react-router';


function HomePage() {

    const {directorName} = useParams()

    const [movies, setMovies] = useState([])
    const [director, setDirector] = useState({})


    useEffect( () => {
        async function fetchData(){
          const response = await api.get(`/movie/director/${directorName}`) 
                setMovies(response.data.data)
                setDirector(response.data.data[0])
  
        }
         fetchData()
 
        },[directorName])
    return (
        <>
            <Header link="/create-movie"/>

            <h1 className="flex justify-center mx-auto my-10 text-titleForm font-bold">Filmes de {director.director}</h1>
                               
            <main className="w-2/3 my-10 container mx-auto grid lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4  gap-16  mb-10">

                
                {movies.map( movie => {
                    return (
                    <Card
                        key={movie.id}
                        name={movie.name}
                        release_date={movie.release_date}
                        director={movie.director}
                        score={movie.score}
                        link={`/synopsis-movie/${movie.id}`}
                    />
                    )
                })}
              
            </main>
        </>
    )
}

export default HomePage;
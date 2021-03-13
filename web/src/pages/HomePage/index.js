import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';

import Card from '../../components/Card';

import api from '../../services/api';


function HomePage() {

    const [movies, setMovies] = useState([])
    const [name, setName] = useState([]);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await api.get(`/movie/findbyname/${name}`)
            setMovies(response.data.data)
        } catch(error) {
            console.log("erro erronio: ",error.response.status)

            if(error.request.status == 404) {
                alert("Filme não encontrado")
            }
        }
    }

    useEffect( () => {
    async function fetchData(){
      const response = await api.get("movie")
            setMovies(response.data.data)
            
    }
     fetchData()
    },[])

    return (
        <>
            <Header link="/create-movie"/>
            <form onSubmit={handleSubmit} className="my-10 w-2/3 flex justify-center mx-auto shadow-modifySearchShadow">
            
                <button type="submit" className="p-4 bg-white rounded-l-xl ">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button> 
                <input 
                onChange={(event) => setName(event.target.value)}
                type="text" 
                name="movie"
                placeholder="Procure por um filme ou diretor..."
                className="p-4 w-full bg-white rounded-r-x1 flex "
                />

             </form>

            <main className="w-2/3 container mx-auto grid lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4  gap-16  mb-10">
                {movies.map( movie => {
                    return (
                    <Card
                        key={movie.id}
                        name={movie.name}
                        release_date={movie.release_date}
                        director={movie.director}
                        score={movie.score}
                    />
                    )
                })}
              
            </main>
        </>
    )
}

export default HomePage;
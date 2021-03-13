import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';

import Search from '../../components/Search';
import Card from '../../components/Card';

import api from '../../services/api';


function HomePage() {

    const [movies, setMovies] = useState([])

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
            <Search/>
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
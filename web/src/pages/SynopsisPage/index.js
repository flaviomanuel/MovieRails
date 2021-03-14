import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import {BiCameraMovie} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'

import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';

function SynopsisPage() {

    const {id} = useParams()
    
    const [movies, setMovies] = useState([])
    const [newScore, setNewScore] = useState(2)

    const starArray = []

    useEffect(() => {
        api.get(`movie/${id}`).then(response => {
            setMovies(response.data.data)
        })
    },[id])

    useEffect(() => {
        setNewScore(movies.score)
        console.log('pontos: ',movies.score)
        console.log('NEW pontos: ',newScore)
    })

   
        let i =0; 
        for (i = 0; i < movies.score; i++) {
            starArray.push(i+1)
        }
    
    console.log('array da estrela',starArray)
    return (
        <>
            <Header/>
            <div className="container w-2/3  mx-auto bg-white rounded-2xl mt-10">
                <div className="h-14 rounded-t-lg flex items-center justify-start pl-8 font-bold bg-redRails text-titleForm mx-auto text-white text-start m-4">
                    <BiCameraMovie size="2.4rem"/>
                    <h1 className="pl-5">{movies.name}</h1>
                </div>
            <div className="m-8 flex justify-between items-center">
                <div>
                    <h2 className="text-directorName font-bold mb-2">{movies.director}</h2>
                    <p className="my-2 text-releaseDate text-releaseDate " >{movies.release_date}</p>
                    
                    <div className="flex items-center mb-2">
                    {starArray.map((star,index) => {
                       return(
                        <AiFillStar size="1.8rem" value={star} color="#FFC107"/>
                       ) 
                    })} 
                    <p className="text-modifyLg ml-2">({movies.score}/5)</p>
                    </div>

                </div>
                <div className="flex">
                    <Link to="/update-movie" className="mx-2 p-2 bg-orangeUpdate rounded-full">
                        <svg className="w-6 h-6" fill="none"  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </Link>
                    <Link className="mx-2 p-2 fill-redDelete bg-redDelete rounded-full">
                        <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </Link>
                </div>
            </div>
                 <div className="px-8 pb-10">
                   {movies.synopsis}
                </div>
            </div>
        </>
    )
}

export default SynopsisPage;
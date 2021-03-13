import React from "react";
import whiteMovieRails from '../../assets/images/whiteMovieRailsLogo.png'

function LeftArticle({title}){
    return (

            <div className="bg-leftBackgroundRedRails h-screen w-2/5 flex flex-col justify-center items-center p-4 " >
                
                    <img src={whiteMovieRails} alt="logo movieRails branco" className="w-96 m-10"/>
                    <h1 className="text-titleLeftMain text-white font-bold text-center max-w-xs">{title}</h1>
                
               
            </div>
           
    )
}

export default LeftArticle;
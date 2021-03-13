import React from "react";
import whiteMovieRails from '../../assets/images/whiteMovieRailsLogo.png'

function LeftMain(){
    return (

            <div className="bg-leftBackgroundRedRails h-screen w-2/5 flex flex-col justify-center items-center " >
                
                    <img src={whiteMovieRails} alt="logo movieRails branco" className="w-96 m-10"/>
                    <h1 className="text-titleLeftMain text-white font-bold text-center max-w-xs">Cadastre um filme</h1>
                
               
            </div>
           
    )
}

export default LeftMain;
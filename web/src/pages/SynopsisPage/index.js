import React from 'react';
import Header from '../../components/Header';
import {BiCameraMovie} from 'react-icons/bi'
import ReactStars from "react-rating-stars-component";

function SynopsisPage() {
    return (
        <>
            <Header/>
            <div className="container w-2/3  mx-auto bg-white rounded-2xl mt-10">
                <div className="h-14 rounded-t-lg flex items-center justify-start pl-8 font-bold bg-redRails text-titleForm mx-auto text-white text-start m-4">
                    <BiCameraMovie size="2.4rem"/>
                    <h1 className="pl-5">Blade Runner - O Caçador de Androides</h1>
                </div>
            <div className="m-8 flex justify-between items-center">
                <div>
                    <h2 className="text-directorName font-bold mb-2">Ridley Scott</h2>
                    <p className="text-releaseDate text-releaseDate" >07/20/1989</p>
                    <ReactStars
                    count={5}
                    value={3}
                    size={30}
                    edit={false}
                    activeColor="#ffd700"
                    />
                </div>
                <div className="flex">
                    <span className="mx-2 p-2 bg-orangeUpdate rounded-full">
                        <svg className="w-6 h-6" fill="none"  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </span>
                    <span className="mx-2 p-2 fill-redDelete bg-redDelete rounded-full">
                        <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </span>
                </div>
            </div>
                 <div className="px-8 pb-10">
                    No início do século XXI, uma grande corporação desenvolve um robô que é mais forte e ágil que o ser humano e se equiparando em inteligência. São conhecidos como replicantes e utilizados como escravos na colonização e exploração de outros planetas. Mas, quando um grupo dos robôs mais evoluídos provoca um motim, em uma colônia fora da Terra, este incidente faz os replicantes serem considerados ilegais na Terra, sob pena de morte. A partir de então, policiais de um esquadrão de elite, conhecidos como Blade Runner, têm ordem de atirar para matar em replicantes encontrados na Terra, mas tal ato não é chamado de execução e sim de remoção. Até que, em novembro de 2019, em Los Angeles, quando cinco replicantes chegam à Terra, um ex-Blade Runner (Harrison Ford) é encarregado de caçá-los.
                </div>
            </div>
        </>
    )
}

export default SynopsisPage;
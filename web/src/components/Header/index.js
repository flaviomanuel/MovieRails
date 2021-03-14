import React from 'react';
import { Link } from 'react-router-dom';

import movieRailsLogo from '../../assets/images/movieRailsLogo.png'
import Button from '../Button';

function Header({link}) {
    return (
        <header className="w-screen:container mx-auto bg-white py-4" >
            <div className="container sm:mx-auto flex content- justify-between items-center px-24">
                <Link to="/">
                <img className="h-16" src={movieRailsLogo} alt="movieRails logo"/>
                </Link>
                <Button link={link} text="Novo Filme"/>
            </div>
        </header>
    )
}

export default Header;
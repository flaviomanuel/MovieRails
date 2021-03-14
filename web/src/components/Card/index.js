import React from 'react'
import { BiMovie } from 'react-icons/bi'
import { MdDateRange } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import ItemCard from './components/ItemCard'
import { Link } from 'react-router-dom'

function Card({name, release_date, director, score, link}){
    return (
        <Link to={link} className="w-2/3 ">
            <div className="h-44 w-64 bg-redRails rounded-xl ">
                <div className="flex p-4  ">
                    <div className="h-36 w-2 bg-white rounded-xl "></div>
                    <div className="flex flex-col justify-center">
                        <ItemCard icon={<BiMovie size="1.5rem"/>}>{name}</ItemCard>
                        <ItemCard icon={<MdDateRange size="1.5rem"/>}>{release_date}</ItemCard>
                        <ItemCard icon={<AiOutlineUser size="1.5rem"/>}>{director}</ItemCard>
                        <ItemCard icon={<AiFillStar size="1.5rem"/>}>{score}</ItemCard>
                    </div>
                </div>
            </div>
          </Link>
    )

}

export default Card;
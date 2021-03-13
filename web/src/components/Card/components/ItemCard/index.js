import React from 'react';

function ItemCard({children, icon}) {
    return (
        <div className="flex items-center  ml-2 my-1 text-white">
            <span>
                {icon}
            </span> 
            <h1 className="font-bold text-lg ml-3 ">{children}</h1>
        </div>
    )   
}

export default ItemCard;
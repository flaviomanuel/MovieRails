import React from 'react';

function Search() {
    return(
        <div className="my-10 w-2/3 flex justify-center mx-auto shadow-modifySearchShadow">
            
            <button className="p-4 bg-white rounded-l-xl ">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button> 
            <input 
            type="text" 
            placeholder="Procure por um filme ou diretor..."
            className="p-4 w-full bg-white rounded-r-x1 flex "
            />
        </div>

    )
}

export default Search;
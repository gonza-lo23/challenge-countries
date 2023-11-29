// SearchBar.js
'use client';
import React, { useState } from 'react';

const SearchBar = () => {

  const [query, setQuery] = useState(['hola','pepe']);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

 

  const getFilteredItems = (query, items)=>{
    if(!query){
       return items
    }
    return items.filter((song)=> song.name.common.includes(query))
   }

  return (
    <>
    <div className="flex items-center space-x-2 text-black">
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Search..."
        className="border p-2 rounded"
      />
     </div>
      <div className='flex'>
        {query.map((item) => (
            <div className='text-black text-md'>{item}</div>
        ))}
      </div>
      </>
  );
};

export default SearchBar;

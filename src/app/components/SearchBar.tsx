// SearchBar.js
'use client';
import React, { useState } from 'react';
import Link from 'next/link';


const SearchBar = () => {

  const [input, setInput] = useState();
  const [filter, setFilter] = useState([]);

  // const fetchData = (input:any) => {
  //   fetch(`https://restcountries.com/v3.1/name/${input}`)
  //   .then((response)=> response.json())    
  //   .then((json)=>{
  //       json.map((ee:any)=>{
        
  //           setFilter(ee.name.common)
  //         console.log(filter)
  //       })
  //     })
   
  // }

  const handleInputChange = (e:any) => {
    setInput(e.target.value);
    console.log(input)
  };


  return (
   
    <div className="grid mb-12 grid-flow-row text-black">
     <form className='flex row-span-1 w-12 h-14'> 
      <input
        value={input}
        type="text"
        onChange={handleInputChange}
        placeholder="Search for a country..."
        className="
        dark:border-gray-800 
        dark:text-white
        border p-2 rounded-lg rounded-r-sm "
      />
      <div 
      className='
      dark:bg-gray-600
      dark:text-white
      dark:border-gray-800
      bg-gray-300 rounded-lg 
      rounded-l-sm border-2  
      border-gray-200 text-md'>
      <div 
      className='p-1 pt-3'>
        <Link 
          href={`/productDetail/name/[id]`} 
          as={`/productDetail/${input}`} >
            Search
            </Link>
      </div>
      </div>
     </form>{
     input? (
     <div 
     className='
     dark:text-gray-300
     dark:bg-gray-700 
     dark:border-gray-500
     bg-white border-2 
     border-gray 
     ml-1 mt-0.5 w-56 
     rounded-lg'>
     <Link 
          href={`/productDetail/name/[id]`} 
          as={`/productDetail/${input}`} >
             <div className='pl-2 pt-2'>{input}</div>
            </Link>
      </div>):('')
     }
      </div>
  );
};

export default SearchBar;

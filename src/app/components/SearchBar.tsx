'use client';
import { useState } from 'react';
import Link from 'next/link';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);

    if (event.target.value) {
      fetch(`https://restcountries.com/v3.1/name/${event.target.value}`)
        .then((response) => response.json())
        .then((data) => {
          const filteredData = data.filter((country) =>
            country.name.common.toLowerCase().startsWith(event.target.value.toLowerCase())
          );
          setResults(filteredData);
        });
    } else {
      setResults([]);
    }
  };

  return (
    <div className="absolute grid mb-6 grid-rows-2 text-black">
      <form className='grid row-span-1 w-30 h-16'> 
       <input
          onClick={() => setOpen(true)}
          value={input}
          type="text"
          onChange={handleInputChange}
          placeholder="Search for a country..."
          className="
            row-span-1
            pl-4
            w-96 h-16
            dark:border-gray-800 
            dark:bg-gray-700
            dark:text-white
            text-xl
            border p-2 rounded-lg"
        />
        {open && 
        
         <div   
             className='
             bg-gray-200 dark:bg-gray-800
             dark:text-white
             row-span-2 mt-1 p-1 
             pt-3 grid grid-flow-rows 
             rounded-md w-96 bg-white'>
          {results?.map((result, index) => (
           
            <Link 
              className='pl-4 p-2             hover:dark:bg-gray-700
              hover:bg-gray-300'
              key={index}
              href={`/productDetail/name/[id]`} 
              as={`/productDetail/${result.name.common}`}>
              {result.name.common}
            </Link>
          ))}
       </div>
}
      </form>
    </div>
  );
};

export default SearchBar;
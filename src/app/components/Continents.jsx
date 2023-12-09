// SearchBar.js
'use client';
import React, { useState } from 'react';
import Link from 'next/link';


const Continents = () => {

  const [input, setInput] = useState();
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState([]);

 
    const [selectedOption, setSelectedOption] = useState('');
  
    const continents = [
        {id:1,name:'Africa'},
        {id:2,name:'Americas'},
        {id:3,name:'Europe'},
        {id:4,name:'Asia'},
        {id:5,name:'Oceania'}  
    ];
  
  


  return (
   <div>
    <div className="grid w-60 mb-12 grid-flow-row text-black">
      <div 
      className='
      dark:bg-gray-700
      dark:text-white
      dark:border-gray-800
      bg-white rounded-lg 
      rounded-lg border-2  
      border-gray-200 text-lg'>
      <button onClick={()=> setOpen(!open)} 
       className='text-md h-16 px-14 pl-8 font-medium py-4'>
       Filter by Region
      </button>
      </div>
       { open && ( 
       <div className=' 
       dark:bg-gray-600
       dark:text-white
       dark:border-gray-800
         mt-20 roudend-lg border-2  
         absolute w-60 rounded-lg
       border-gray-200 bg-white pl-8 pb-2 text-black font-medium text-md'>
         { continents.map ((e)=>{
                return(
                    <div
                    className='mt-2 hover:bg-gray-500'
                     key={e.id}>
                    <Link 
                    onClick={()=> setOpen(false)}
                    href={`/filterByRegions/name/[id]`} 
                    as={`/filterByRegions/${e.name}`}>
                    {e.name}
                    </Link>
                    </div>
                )}
            )
         }
       </div>
      
       )}
    </div>
    </div>
  );
};

export default Continents;

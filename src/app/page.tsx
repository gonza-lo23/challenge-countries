'use client ';
import Image from 'next/image'
import './globals.css'
import Link from 'next/link';


export default async function Home() {
 const res = await fetch('https://restcountries.com/v3.1/all');
 const data = await res.json();

  return (
    
<>
 {/*empieza search */}

    <div className="flex items-center space-x-4 p-4 ml-32 pl-6">
      {/* Search Input */}
      <input
        type="text"
        className="w-96 h-14 p-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
        placeholder="Search for any countrie..."
      />

      {/* Dropdown Menu */}
      <div className="relative">
        <button className="w-60 h-14 bg-white rounded-l border-shadow  text-black p-2">
          Filter by Region 
        </button>
        <div className="absolute right-0 mt-2 py-2 bg-white border border-gray-300 rounded-lg hidden">
          <ul className="list-none p-2">
            <li className="hover:bg-indigo-100 py-1 px-2 cursor-pointer">Option 1</li>
            <li className="hover:bg-indigo-100 py-1 px-2 cursor-pointer">Option 2</li>
            <li className="hover:bg-indigo-100 py-1 px-2 cursor-pointer">Option 3</li>
          </ul>
        </div>
      </div>
    </div>
      {/*termina*/}

    <div className="bg-gray-100 p-8">
      <div className="container text-black mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Column 1 */}
       
       {
       
       data.map ((post)=>{
        return (
          <>
          <Link href={`/productDetail/name/[id]`} as={`/productDetail/name/${post.name.common}`} >
          <div className="bg-white w-fit h-96 shadow-md ">
            <img src={post.flags.png} />
            <div className='ml-8 mb-8'>
            <h1 className="text-2xl text-black font-bold mt-4">{post.name.common}</h1>
            <ul className="mt-2 text-lg text-bold">
              <li>Population: {post.population}</li>
              <li>Region: {post.region}</li>
              <li>Capital: {post.capital}</li>
            </ul>

            </div>
          </div>
          </Link>
          </>
        )
       })}






      </div>
    </div>

    
  </>
  )
}


    
import './globals.css'
import Link from 'next/link';
import SearchBar from './components/SearchBar';
import { useSearchParams } from 'next/navigation';


export default async function Home({params}:{params:{id: string}}) {
 const res = await fetch('https://restcountries.com/v3.1/all');
 const data = await res.json();


 
  
  return (
      <>
     {/*empieza search */}
     
     <div className='ml-36'>
       <SearchBar />
       </div>
     
      {/*termina*/}

    <div className="bg-gray-100 p-8">
      <div className="container text-black mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Column 1 */}
        {data.map ((post, index)=>{
          return (
          <>
          <Link 
          key={index}
          href={`/productDetail/name/[id]`} 
          as={`/productDetail/${post.name.common}`} >
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


    
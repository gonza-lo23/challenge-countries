import './globals.css'
import Link from 'next/link';
import SearchBar from './components/SearchBar';
import Continents from './components/Continents';

import { useSearchParams } from 'next/navigation';


export default async function Home({params}:{params:{id: string}}) {
 const res = await fetch('https://restcountries.com/v3.1/all');
 const data = await res.json();



 function filterAndMapData(data: any[], region: string) {
  // Filtrar los datos por región

  // Ordenar los datos filtrados en orden alfabético por región
  const sortedData = data.sort((a, b) => a.name.common.localeCompare(b.name.common));

  // Mapear los datos ordenados a la página
  const mappedData = sortedData.map((paises, index) => {
          return (
          <>
          <Link 
          key={index}
          href={`/productDetail/name/[id]`} 
          as={`/productDetail/${paises.name.common}`} >
          <div className="dark:bg-gray-800
           dark:text-white rounded-md
            bg-white w-fit h-96 shadow-md ">
            <img className='rounded-t-md'src={paises.flags.png} />
            <div className='ml-8 mb-8 rounded-xl'>
            <h1 className="dark:text-gray-300 text-2xl text-black font-bold mt-4">{paises.name.common}</h1>
            <ul className="mt-2">
              <div className='flex'>
              <div className='font-bold mr-2'>Population:</div>
              <div className=''>{paises.population}</div>
              </div>
              <div className='flex'>
              <div className='font-bold mr-2'>Region:</div>
              <div className=''>{paises.region}</div>
              </div>
              <div className='flex'>
              <div className='font-bold mr-2'>Capital:</div>
              <div className=''>{paises.capital}</div>
              </div>
            </ul>

            </div>
          </div>
          </Link>
          </>
        )
       });


  return mappedData;
}



return (
  <div className="grid bg-gray-100 dark:bg-gray-900 p-8">
   {/*empieza search */}
   <div className='grid grid-cols-2 w-screen h-auto'>
   <div className=' dark:text-white mx-36'>
     <SearchBar />
     </div>
    {/*termina*/}
    <div className='dark:text-white mx-36 w-auto ml-96 pl-32'>
     <Continents />
     </div>
     </div>
    <div className="container text-black mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
      {/* Column 1 */}
     
    {filterAndMapData(data, params.id)}





    </div>
  </div>

  

)
}



    
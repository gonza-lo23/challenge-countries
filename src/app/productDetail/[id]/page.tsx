import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import renderListBorders from '../../components/renderListBorders';

export default async function Home({params}:{params:{id: string}}) {
 
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.id}?`);
  const data = await res.json();




  return (
<>
 {
  data.map((country:any,index:any)=>{
    return(
    <div key={index} 
     className='
     dark:bg-gray-950   
     lg:grid  lg:grid-row-1 
     lg:grid-cols-3 
     gap-4 w-screen h-screen  
     md:grid-cols-1 lg:px-24'>
     <div className="lg:col-start-1 lg:col-end-2
        h-fit w-fit">
        <Link href='/'>
         <button className="
         dark:bg-gray-600
         dark:text-white
           h-14 w-20 bg-gray-300
           mb-8 hover:bg-gray-400
         text-gray-600 font-bold rounded-lg">
          Back
          </button> 
          </Link>
          <img src={country.flags.png}
          alt="Image 1" className="w-full h-96 object-fill" />
        {/*titulo y descripcion 1*/}
        </div>
          <div className=' col-start-2 col-end-3
          dark:text-white
          ml-8 mb-8 text-bold text-black lg:mt-20'>
          <h1 className="dark:text-white text-4xl text-black font-bold mt-4 mb-8">{country.name.common}</h1>
          <div className="text-lg mt-8 mb-12">
          <div className='flex mb-4'>
              <div className='font-bold mr-2'>Native name:</div>
              <div className=''>{country.name.official} </div>
              </div>

              <div className='flex mb-4'>
              <div className='font-bold mr-2'>Population:</div>
              <div className=''>{country.population} </div>
              </div>
              <div className='flex mb-4'>
              <div className='font-bold mr-2'>Region:</div>
              <div className=''>{country.region} </div>
              </div>
              <div className='flex mb-4'>
              <div className='font-bold mr-2'>Sub Region:</div>
              <div className=''>{country.subregion} </div>
              </div>
          </div>
        <div className='mt-16 text-lg'>
            <div className='font-bold'>Border Countries:</div> 
          </div>
            <div className=" text-black mt-4 text-xl">
            <div className='
              dark:text-white
             text-black flex 
              gap-4'>
              
              {
                country.borders?.map((countryBorders:any, index:any)=>{
                 return( 
                  <div key={index} className='flex dark:bg-gray-700  bg-white border-2 border-gray-400 w-16 rounded-md '>
                 <div className='dark:text-gray-200 p-2 text-gray-800' >
                  <Link 
                  href={`/productDetailAlpha/name/[id]`} 
                  as={`/productDetailAlpha/${countryBorders}`} >
                    {countryBorders}
                  </Link>
                  </div>
                  </div>)
                })

              }
              </div>
          </div>
          </div>
          {/* descripcion 2 */}
          <div className='col-start-3 col-span-3 lg:mt-20  '>
          <div className="lg:mt-24 md:ml-8 text-lg  text-black">
          <div className='flex mb-4 dark:text-white'>
              <div className='font-bold mr-2'>Top level Domain:</div>
              <div className=''>{country.name.common} </div>
              </div>
              <div className='flex mb-4 dark:text-white'>
              <div className='font-bold mr-2'>Language:</div>
              <div className=''>{country.name.common} </div>
              </div>
              <div className='flex mb-4 dark:text-white'>
              <div className='font-bold mr-2'>Currencies:</div>
              <div className=''>{country.name.common} </div>
              </div>
            </div>
          </div>   
  </div>
  )
})
}
</>
  )};


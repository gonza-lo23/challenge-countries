/* eslint-disable @next/next/no-async-client-component */
import Image from 'next/image'
import Link from 'next/link';


export default async function Home({params}:{params:{id: string}}) {
 
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.id}?`);
  const data = await res.json();
  const isTrue = true;
  const sas = ['pepe','sas', 'chcahco'];

  const renderList = (info) => {


   const pps = info.map((item, index) => {
    const filteredBorders = item.borders.map(border => border);

      return(
      <li key={index} 
      className="bg-green-300 text-black rounded-md w-auto h-auto m-4 ">
          {item.borders}
      </li> 
      );

    });
    return pps ;
  };

  return (
<>
 {
  data.map((pp)=>{
    return(
 <div className='lg:grid  lg:grid-row-1 lg:grid-cols-3 gap-4 w-screen h-screen m-12 md:grid-cols-1 lg:px-24'>
     <div className="lg:col-start-1 lg:col-end-2
       shadow-md h-fit w-fit">
        <Link href='/'>
         <button className="h-14 w-20 bg-gray-400 mb-8 hover:bg-gray-700 text-white font-bold rounded-lg">
          Back
          </button> 
          </Link>
          <img src={pp.flags.png}
          alt="Image 1" className="w-full h-96 object-fill  " />
        {/*titulo y descripcion 1*/}
        </div>
          <div className=' col-start-2 col-end-3
          ml-8 mb-8 text-bold text-black lg:mt-20'>
          <h1 className="text-4xl text-black font-bold mt-4 mb-8">{pp.name.common}</h1>
          <ul className="text-xl mt-8 mb-12">
            <li className='my-4'>Native name: {pp.name.common}</li>
             <li className='my-4'>Population: M{pp.population}</li>
             <li className='my-4'>Region: {pp.region}</li>
            <li className='my-4'>sub Religion: {pp.subregion}</li>
          </ul>
        <div className='grid  '>
          <ul className="mt-12 text-xl ">
            <li>Border Countries:</li>
          
            <div className="flex mt-4 w-auto h-auto">
            { isTrue ? (<ul className='flex w-auto h-auto gap-x-6'>{renderList(data)}</ul>) : (<li> no hay nada </li>)}
          </div>
          </ul>
          </div>
          </div>
          {/* descripcion 2 */}

          <div className='col-start-3 col-span-3 lg:mt-20 '>
          <ul className="lg:mt-24 md:ml-8 text-xl text-black">
          <li className='my-4'>Top level Domain: {pp.name.common}</li>
          <li className='my-4'>Curriencies: {pp.name.common}</li>
            <li className='my-4' >Languages: {pp.name.common}</li>
          </ul>
          </div>   
  </div>



  )
})
}
</>
  )};


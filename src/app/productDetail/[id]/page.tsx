'use client';
import Image from 'next/image'


export default async function Home({params}:{params:{id: string}}) {
 
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.id}`);
  const data = await res.json();

  const renderList = (dataArray) => {

    dataArray.forEach((index, item) => {
      return(<li><button key={index} className="bg-green-500 text-green-500 py-2 px-4 rounded-md cursor-pointer gap-4 hover:bg-green-600">{item}</button></li>);
    });

  };

  return (
<>
 {
  data.map((pp)=>{
    return(
 <div className='lg:grid  lg:grid-cols-3 gap-4 w-screen h-screen m-12 md:grid-cols-1 '>
      <div className="lg:col-start-1 lg:col-end-2
      bg-white shadow-md h-fit w-fit">
          <img src={pp.flags.png}
          alt="Image 1" className="w-full h-96 object-cover rounded-t-lg" />
        {/*titulo y descripcion 1*/}
        </div>
          <div className='col-start-2 col-end-3
          ml-8 mb-8 text-bold text-black'>
          <h1 className="text-4xl text-black font-bold mt-4 mb-8">{pp.name.common}</h1>
          <ul className="text-xl mt-8 mb-12">
            <li>Native name: {pp.name.nativeName.official}</li>
             <li>Population: M{pp.population}</li>
             <li>Region: {pp.region}</li>
            <li>sub Religion: {pp.subregion}</li>
          </ul>
          <ul className="mt-12 text-xl m">
            <li>Border Countries</li>
            <ul className="flex gap-4 mt-4">
           {renderList? (pp.borders) : (<li> no hay nada </li>)}
          
          </ul>
          </ul>
          </div>
          {/*descripcion 2*/}

          <div className='lg:col-start-3 lg:col-span-3 '>
          <ul className="lg:mt-24 md:ml-8 text-xl text-black">
            <li>Languages: {pp.name.common}</li>
          </ul>
          </div>   
  </div>



  )
})
}
</>
  )};


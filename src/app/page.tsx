import './globals.css'
import Link from 'next/link';

export default async function Home() {
 const res = await fetch('https://restcountries.com/v3.1/all');
 const data = await res.json();

 const searchInput:any = [];

  const handleInputChange = (event)=> {
    searchInput.push(event?.target.value);
  };
  
  return (
    
<>
{/* <div className="relative inline-block text-left">
  <div>
    <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Options
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="py-1" role="none">
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
      <form method="POST" action="#" role="none">
        <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
      </form>
    </div>
  </div>
</div> */}

 {/*empieza search */}

    <div className="flex items-center space-x-4 p-4 ml-32 pl-6">
      {/* Search Input */}
      <input
        type="text"
        className="w-96 h-14 p-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
        placeholder="Search for any countrie..."
        value={searchInput}
        onChange={handleInputChange()}
      />
      </div>
{/* <div className='dropdown'>
      {barInputValue.filter((item)=>{
        const searchTerm = value.toLoverCase();
        const fullName = item.toLoweCase();

        return searchTerm && fullName.starsWith(searchTerm)
      })
      .map((item)=>{
       <div>{item.}</div>
      })}
      </div> */}
<div> 
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
          <Link href={`/productDetail/name/[id]`} as={`/productDetail/${post.name.common}`} >
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


    
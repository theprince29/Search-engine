import React from 'react'
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'
import { useLocation } from 'react-router-dom'
const Navbar = ({darkTheme,setDarkTheme}) => {
    const newLocal = 'Light '
    const location = useLocation();
  return (
    <div className='p-5 pb-2 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 '>
      <div className="flex justify-between items-center space-x-5 w-screen mb-2">
        <Link to="/">
            <p className='text-2xl p-2 bg-blue-500 font-bold text-white py-1 rounded dark:bg-gray-500 dark:text-gray-900'>
                KHOJ KRO🔎
            </p>
        </Link>
        <button type="button" onClick={()=>{setDarkTheme(!darkTheme)}} className='text-xl p-2 dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg '>
            {darkTheme ? "☀️":"🌙" }
        </button>
      </div>
      {/* <Search/> */}
      {location.pathname == "/search" ? <SearchBox/> : null }
      
        
    </div>
  )
}

export default Navbar

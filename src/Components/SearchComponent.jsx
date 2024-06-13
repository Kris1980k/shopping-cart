import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping,faUser,faSignOut} from '@fortawesome/free-solid-svg-icons'
function SearchComponent({searchProductsByQuery,searchItem}) {
    return (
        <header style={{'backgroundSize': "100% 100%"}} className='App-header  bg-cover'>
            <div className="search-bar bg-white px-4 py-2 flex items-center">
            <div className="gallery bg-green-600 w-5/6 h-full">
            :v
            </div>
            <img src="src\img\venados-logo.png" className='border-red-600 w-24 mx-3' alt="Venados logo" />
                <input 
                    type="text"
                    placeholder='Search your products'    
                    className='border-2 border-solid rounded-lg hover:border-red-600 focus:outline-red-600 p-1 h-14 text-lg px-4 transition-all w-3/6'     
                    value={searchItem}
                    onChange={searchProductsByQuery}
                />
                <FontAwesomeIcon icon={faCartShopping} className='text-red-600 h-6 px-4 hover:scale-125 transition-transform' />
                <FontAwesomeIcon icon={faUser} className='text-red-600 h-6 px-4 hover:scale-125 transition-transform' />
                <FontAwesomeIcon icon={faSignOut} className='text-red-600 h-6 px-4 hover:scale-125 transition-transform' />
            </div>
            <nav className='bg-red-600 text-white h-10 items-center '>
                <div className='inline-block  h-full px-4 '>
                    <div className='flex p-3 h-full items-center hover:bg-red-700 transition-all shadow-lg hover:shadow-red-800'>
                        <p className=' text-xl'>Home</p>
                    </div>
                </div>
                <ul className='float-right h-full flex items-center'>
                <li className='shadow-lg hover:shadow-red-800'>Female</li>
                <li className='shadow-lg hover:shadow-red-800'> Male</li>
                <li className='shadow-lg hover:shadow-red-800'> Kids</li>    
                <li className='shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='shadow-lg hover:shadow-red-800'> Lorem</li> 
                <li className='shadow-lg hover:shadow-red-800'> Lorem</li>  
                </ul>                            
            </nav>
        </header>
    );
}

export default SearchComponent;
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping,faUser,faSignOut} from '@fortawesome/free-solid-svg-icons'
function SearchComponent() {
    return (
        <header style={{'backgroundSize': "100% 100%"}} className='App-header bg-banner bg-cover'>
            <h1 className='text-red-700 text-center'>VENADOS SHOP</h1>
            <img src="src\img\venados-logo.png" className='w-32 m-auto' alt="Venados logo" />
            <div className="search-bar bg-white px-4 py-2">
                <input 
                    type="text"
                    placeholder='Search your products'    
                    className='border-2 border-solid rounded-lg hover:border-red-600 focus:outline-red-600 p-1 w-96 h-14 text-lg px-4'                                
                />
                <FontAwesomeIcon icon={faCartShopping} className='text-red-600 h-6 px-4 hover:scale-125 transition-transform' />
                <FontAwesomeIcon icon={faUser} className='text-red-600 h-6 px-4 hover:scale-125 transition-transform' />
                <FontAwesomeIcon icon={faSignOut} className='text-red-600 h-6 px-4 hover:scale-125 transition-transform' />
            </div>
            <nav className='bg-red-600 text-white h-10 '>
                <h2 className='inline h-full'>Home</h2>
                <ul className='float-right '>
                <li className='inline px-3 hover:bg-red-700'> Female</li>
                <li className='inline px-3'> Male</li>
                <li className='inline px-3'> Kids</li>    
                <li className='inline px-3'> Lorem</li>  
                <li className='inline px-3'> Lorem</li>  
                <li className='inline px-3'> Lorem</li>  
                <li className='inline px-3'> Lorem</li>  
                <li className='inline px-3'> Lorem</li>  
                <li className='inline px-3'> Lorem</li>  
                <li className='inline px-3'> Lorem</li>  
                <li className='inline px-3'> Lorem</li>  
                <li className='inline px-3'> Lorem</li>  
                <li className='inline px-3'> Lorem</li>  
                <li className='inline px-3'> Lorem</li> 
                <li className='inline px-3'> Lorem</li>  
                </ul>                            
            </nav>
        </header>
    );
}

export default SearchComponent;
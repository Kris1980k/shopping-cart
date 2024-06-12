import React from 'react'

function SearchComponent() {
    return (
        <header className='App-header bg-banner bg-contain bg-no-repeat '>
            <h1 className='text-red-700 text-center'>VENADOS SHOP</h1>
            <img src="src\img\venados-logo.png" className='w-32 m-auto' alt="Venados logo" />
            <div className="search-bar">
                <input 
                    type="text"
                    placeholder='Search your products'    
                    className=' border-2 border-solid rounded-lg hover:border-red-600 focus:outline-red-600 p-1 w-96 h-14 text-lg px-4'                                
                />
            </div>
            <nav className='bg-red-600 text-white'>
                Male | Female | Kids | Pets | Other | About                            
            </nav>
        </header>
    );
}

export default SearchComponent;
import React,{useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping,faUser,faSignOut,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {Outlet, Link} from 'react-router-dom'
function SearchComponent({searchProductsByQuery,searchItem}) {
    let slideIndex = 1;

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("img");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }        
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides,3000);
      }

    useEffect(() => {
        
        showSlides(); 
    },[])
    return (
        <>
        <header style={{'backgroundSize': "100% 100%"}} className='App-header  bg-cover'>
            <div className="search-bar bg-white px-4 py-2 flex items-center">
            <div className="gallery xl:block lg:block md:block hidden w-5/6 h-full shadow-black shadow-inner">
                <div className="img">
                    <img className='gal-img prevent-select-img' src="src/img/gallery/gallery_1.jpg" alt="" />
                </div>
                <div className="img">
                    <img className='gal-img prevent-select-img' src="src/img/gallery/gallery_2.jpeg" alt="" />
                </div>
                <div className="img">
                    <img className='gal-img prevent-select-img' src="src/img/gallery/gallery_3.png" alt="" />
                </div>
                <div className="img">
                    <img className="gal-img prevent-select-img" src="src/img/gallery/gallery_4.jpg" alt="" />
                </div>
                <div className="img">
                    <img className='gal-img prevent-select-img' src="src/img/gallery/gallery_5.jpg" alt="" />
                </div>
            </div>
            <img src="src\img\banner-venados.png" className='xl:block lg:block md:inline-block hidden border-red-600 prevent-select-img w-72 h-24 mx-10' alt="Venados logo" />
            <img src="src\img\venados-logo.png" className='xl:hidden lg:hidden md:hidden sm:hidden block border-red-600 prevent-select-img w-32 h-20 mx-4' alt="Venados logo mobile" />
                <div className='w-1/3'>
                <div className='border-2 xl:flex lg:flex md:flex sm:flex hidden items-center '>
                    <input 
                    type="text"
                    placeholder='Search your products'    
                    className='search-input rounded-lg  p-1 h-14 text-lg px-4 transition-all w-11/12'     
                    value={searchItem}
                    onChange={searchProductsByQuery}
                />                
                    <div className=' h-14 flex items-center border-l-2 w-20 hover:bg-red-600 m-glass-div transition-colors'>
                        <Link to="/" className='w-full'>
                        <FontAwesomeIcon className='w-full float-right h-5 text-gray-400 m-glass transition-colors' icon={faMagnifyingGlass} />
                        </Link>
                    </div>                    
                </div>
                </div>
                <Link to="/cart"> 
                    <FontAwesomeIcon icon={faCartShopping} className='text-red-600 h-6 px-4 hover:scale-125 transition-transform' /> 
                </Link>
                <FontAwesomeIcon icon={faUser} className='text-red-600 h-6 px-4 hover:scale-125 transition-transform' />
                <FontAwesomeIcon icon={faSignOut} className='text-red-600 h-6 px-4 hover:scale-125 transition-transform' />
            </div>
            <nav className='bg-red-600 text-white h-10 items-center flex w-full xl:overflow-auto lg:overflow-auto md:overflow-auto sm:overflow-auto overflow-scroll '>
                <div className='inline-block  h-full px-4 '>
                    <div className='flex p-3 h-full items-center hover:bg-red-700 transition-all xl:shadow-lg lg:shadow-lg md:shadow-lg sm:shadow-lg xl:hover:shadow-red-800 lg:hover:shadow-red-800 md:hover:shadow-red-800 sm:hover:shadow-red-800'>
                        <p className='xl:text-xl lg:text-xl md:text-xl text-sm'>Home</p>
                    </div>
                </div>
                <ul className='float-end h-full flex items-center xl:overflow-auto lg:overflow-auto md:overflow-auto sm:overflow-auto overflow-scroll'>
                <li className='text-sm w-2 px-6 shadow-lg hover:shadow-red-800'>Female</li>
                <li className='text-sm w-2 px-6 shadow-lg hover:shadow-red-800'> Male</li>
                <li className='text-sm w-2 px-6 shadow-lg hover:shadow-red-800'> Kids</li>    
                <li className='text-sm w-2 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='text-sm w-2 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='text-sm w-2 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='text-sm w-2 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='text-sm w-2 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='text-sm w-2 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='text-sm w-2 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='text-sm w-2 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='text-sm w-2 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='text-sm w-2 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                <li className='text-sm w-2 px-6 shadow-lg hover:shadow-red-800'> Lorem</li> 
                <li className='text-sm w-2 px-6 shadow-lg hover:shadow-red-800'> Lorem</li>  
                </ul>                                        
            </nav>
        </header>
        <Outlet/>
        </>
    );
}

export default SearchComponent;